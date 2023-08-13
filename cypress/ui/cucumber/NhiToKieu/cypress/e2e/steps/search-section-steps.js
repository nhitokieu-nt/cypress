import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SearchSection } from "../../pages/search-section";

When ('the user search book {string}', function(bookTitle) {
    SearchSection.inputSearchTextbox(bookTitle)
    SearchSection.getBookTitle(bookTitle).should('be.visible')

    cy.wrap(bookTitle).as('bookTitle')
})
Then ('the book is not shown', () => {
    cy.get('@bookTitle').then((bookTitle) => {
        SearchSection.inputSearchTextbox(bookTitle)
        SearchSection.getBookTitle(bookTitle).should('not.exist')
    })
})
Then ('the user selects a book {string}', function(bookTitle)  {
    cy.wrap(bookTitle).as('bookTitle')
    SearchSection.inputSearchTextbox(bookTitle)
    SearchSection.clickBookLnk(bookTitle)
})

When ('the user inputs book name', (dataTable) => {
    dataTable.hashes().forEach((element) => {
        cy.wrap(element.keyword).as('keyword')
        SearchSection.inputSearchTextbox(element.keyword)
    })
})

Then ('all books match with input criteria will be displayed', () => {
    cy.get('@keyword').then((keyword) => {
        SearchSection.getBookList().then(($elements) => {
            const books = Array.from($elements, element => element.innerText);
            books.forEach((book) => {
                expect(book.toLocaleLowerCase()).to.contain(keyword.toLocaleLowerCase())
            })
        })
    })
})