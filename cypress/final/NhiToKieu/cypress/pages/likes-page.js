import { UrlConstants } from "../constants/url-constants"

const LBL_TOTAL_LIKES = "//a[@data-test='user-nav-link-likes']//span[2]//span"
const PHOTO = "//div[contains(@style, 'columns:3')]//a[contains(@href, 'photos') and not (@title='Download photo')]";

export const LikesPage = {
    navigateLikesPage(username) {
        cy.visit(UrlConstants.URL_LIKE_PAGE(username))
    },
    getTotalLikes() {
        return cy.xpath(LBL_TOTAL_LIKES)
    },
    getPhotoUrls() {
        return cy.xpath(PHOTO)
    }
}