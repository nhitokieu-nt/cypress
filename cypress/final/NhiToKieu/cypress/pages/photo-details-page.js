import { UrlConstants } from "../constants/url-constants"

const BTN_LIKE = "//header//button[@title='Like']";

export const PhotoDetailsPage = {
    navigatePhotoDetailsPage(photoId) {
        cy.visit(UrlConstants.URL_PHOTO_DETAILS_PAGE(photoId))
    },
    clickLikeBtn() {
        cy.xpath(BTN_LIKE).click()
    },
}