import { UrlConstants } from '../constants/url-constants'

const BTN_DELETE = "//span[@title='Delete']"

export const ProfilePage = {
    navigate() {
        cy.visit(UrlConstants.PROFILE_URL)
    },
    clickDeleteBtn() {
        cy.xpath(BTN_DELETE).first().click()
    }
}