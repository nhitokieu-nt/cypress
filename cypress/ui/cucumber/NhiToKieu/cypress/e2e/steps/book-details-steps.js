import { Then } from "@badeball/cypress-cucumber-preprocessor"
import { BookDetailsPage } from "../../pages/book-details-page"

Then ('the user clicks on Add To Your Collection', () => {
    BookDetailsPage.clickAddToYourCollectionBtn()
})

Then ('an alert message {string} is shown', function(expectedMessage) {
    cy.on('window:alert', (actualMessage) => {
        expect(actualMessage).to.equal(expectedMessage);
    })
})