import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../pages/home-page";
import { PhotoDetailsPage } from "../../../pages/photo-details-page";

Then ('I like {int} random photos', (number) => {
    HomePage.getRandomPhotos(number)
    cy.get('@photoIdList').then((photoIdList) => {
        photoIdList.forEach((photoId) => {
            PhotoDetailsPage.navigatePhotoDetailsPage(photoId)
            PhotoDetailsPage.clickLikeBtn()
        })
    })
});