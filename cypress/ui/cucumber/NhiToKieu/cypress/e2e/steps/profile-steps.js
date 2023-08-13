import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { ProfilePage } from "../../pages/profile-page"
import { ModalDialog } from "../../pages/shared/modal-dialog"
import { SearchSection } from "../../pages/search-section"

Then ('book is shown in users profile', function() {
    ProfilePage.navigate()
    cy.get('@bookTitle').then((bookTitle) => {
        SearchSection.inputSearchTextbox(bookTitle)
        SearchSection.getBookTitle(bookTitle).should('be.visible')
    })
})

When ('the user is on the Profile page', () => {
    ProfilePage.navigate()
})

Then ('the user clicks on Delete icon', () => {
    ProfilePage.clickDeleteBtn()
})
Then ('the user clicks on OK button', () => {
    ModalDialog.clickOkBtn()
})
Then ('the user clicks on OK button of alert {string}', function(expectedMessage) {
    cy.on('window:alert', (actualMessage) => {
        expect(actualMessage).to.equal(expectedMessage);
    })
})