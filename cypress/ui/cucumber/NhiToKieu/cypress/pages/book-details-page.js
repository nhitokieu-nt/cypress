const BTN_ADD_BOOK_TO_YOUR_COLLECTION = "//button[text()='Add To Your Collection']"

export const BookDetailsPage = {
    clickAddToYourCollectionBtn() {
        cy.xpath(BTN_ADD_BOOK_TO_YOUR_COLLECTION).click()
    }
}