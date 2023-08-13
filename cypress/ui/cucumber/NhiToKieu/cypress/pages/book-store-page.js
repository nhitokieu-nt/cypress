import { UrlConstants } from '../constants/url-constants'

export const BookStorePage = {
    navigate() {
        cy.visit(UrlConstants.BOOK_STORE_URL)
    }
}