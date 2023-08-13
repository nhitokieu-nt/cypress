const TXT_SEARCH_BOX = "#searchBox"
const LNK_BOOKS = "a[href*=book]"
const LNK_BOOK = (bookTitle) => `//a[text()='${bookTitle}']`

export const SearchSection = {
    inputSearchTextbox(keyword) {
        cy.get(TXT_SEARCH_BOX).type('{selectAll}').type(keyword)
    },
    clickBookLnk(bookTitle) {
        cy.xpath(LNK_BOOK(bookTitle)).click()
    },
    getBookTitle(bookTitle) {
        return cy.xpath(LNK_BOOK(bookTitle))
    },
    getBookList() {
        return cy.get(LNK_BOOKS)
    }
}