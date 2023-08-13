import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { PhotoHelpers } from "../../../utils/api/photo-helpers";
import { UserHelpers } from "../../../utils/api/user-helpers";

Before({tags: '@username', order: 1}, function() {
    UserHelpers.getUserInfo(Cypress.env('token'));
    cy.get('@getResp').then((resp) => {
        window.localStorage.setItem('username', resp.body.username)
    })
});
  
Before({tags: '@like_photo', order: 2}, function() {
    let token = Cypress.env('token');
    let username = window.localStorage.getItem('username');

    UserHelpers.getListLikedPhotos(token, username);
    cy.get('@getResp').then((listPhotos) => {
        for (let i = 0; i < listPhotos.body.length; i++) {
            let photoId = listPhotos.body[i].id;
            PhotoHelpers.unlikeAPhoto(token, photoId);
        }
    });
});
