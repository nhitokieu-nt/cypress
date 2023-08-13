import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../pages/home-page";

/*
-------------- Like photo --------------------
*/
// Then ('I like {int} random photos', (number) => {
//     let photoIdList = []
//     for (let i = 1; i <= number; i++) {
//         let random = Math.floor(Math.random() * 10) + 1
//         HomePage.clickPhoto(random)
//         HomePage.clickLikeBtn()
//         HomePage.clickCloseBtn()

//         HomePage.getPhotoUrl(random).then((url) => {
//             let photoId = url.toString().split('/').pop()
//             photoIdList.push(photoId)
//         })
//     }
//     cy.wrap(photoIdList).as('likedPhotoIdList')
// })

// Then ('I like {int} random photos', (number) => {
//     HomePage.getRandomPhoto(number)
//     cy.get('likedPhotoIdListTest').then((likedPhotoIdList) => {
//         for (let i = 0; i < number; i++) {

//         }
//     })

//     let photoIdList = []
//     for (let i = 1; i <= number; i++) {
//         let random = Math.floor(Math.random() * 10) + 1
//         HomePage.clickPhoto(random)
//         HomePage.clickLikeBtn()
//         HomePage.clickCloseBtn()

//         HomePage.getPhotoUrl(random).then((url) => {
//             let photoId = url.toString().split('/').pop()
//             photoIdList.push(photoId)
//         })
//     }
//     cy.wrap(photoIdList).as('likedPhotoIdList')
// })