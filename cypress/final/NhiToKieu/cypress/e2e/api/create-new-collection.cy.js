// import { CreateNewCollectionSchema } from "../../schemas/create-new-collection-schema";
// import { POST_STATUS, RESPONSE_MESSAGE } from "../../utils/api/api-constants";
// import { CollectionHelpers } from "../../utils/api/collection-helpers";

// describe('Create New Collection', () => {
//     let token;
//     beforeEach('get Collection', () => {
//         token = Cypress.env('token')
//         cy.fixture('collection').as('collection').then((collection) => {
//         })
//     })

//     it('Create a new collection successfully with all fields', function() {
//         CollectionHelpers.createNewCollection(
//             token, 
//             title,
//             description, 
//             isPrivate
//         )
//         cy.get('@postResp').then((resp) => {
//             cy.validateSchema(CreateNewCollectionSchema, resp.body)
//             expect(resp.status).eq(POST_STATUS.SUCCESS)
//             expect(resp.body.title).equal(title)
//             expect(resp.body.description).equal(description)
//             expect(resp.body.private).equal(isPrivate)
//         })
//     })

//     it('Create a new collection successfully with mandatory fields', function() {
//         CollectionHelpers.createNewCollection(
//             token, 
//             title,
//             "", 
//             ""
//         )
//         cy.get('@postResp').then((resp) => {
//             expect(resp.status).eq(POST_STATUS.SUCCESS)
//             expect(resp.body.title).equal(title)
//             expect(resp.body.description).equal(null)
//             expect(resp.body.private).equal(false)
//         })
//     });

//     it('Create a new collection unsuccessfully with unauthorized user', function() {
//         CollectionHelpers.createNewCollection(
//             '', 
//             title,
//             description, 
//             isPrivate
//         )
//         cy.get('@postResp').then((resp) => {
//             expect(resp.status).eq(POST_STATUS.UNAUTHORIZED)
//             expect(resp.body.errors.toString()).equal(RESPONSE_MESSAGE.MSG_UNAUTHORIZED_USER)
//         })
//     });

//     it('Create a new collection unsuccessfully with incorrect type of "private" field', function() {
//         CollectionHelpers.createNewCollection(
//             token,
//             title,
//             description,
//             "string"
//         )
//         cy.get('@postResp').then((resp) => {
//             expect(resp.status).eq(POST_STATUS.ERROR)
//             expect(resp.body.errors.toString()).equal(RESPONSE_MESSAGE.MSG_INVALID_DATA_TYPE_PRIVATE)
//         })
//     });
// });

import { CreateNewCollectionSchema } from "../../schemas/create-new-collection-schema";
import { POST_STATUS, RESPONSE_MESSAGE } from "../../utils/api/api-constants";
import { CollectionHelpers } from "../../utils/api/collection-helpers";

describe('Create New Collection', () => {
    let token = Cypress.env('token')
        title = "Private Collection",
        description = "This is a private collection",
        isPrivate = true,

    it('Create a new collection successfully with all fields', function() {
        CollectionHelpers.createNewCollection(token, title, description, isPrivate)
        cy.get('@postResp').then((resp) => {
            cy.validateSchema(CreateNewCollectionSchema, resp.body)
            expect(resp.status).eq(POST_STATUS.SUCCESS)
            expect(resp.body.title).equal(title)
            expect(resp.body.description).equal(description)
            expect(resp.body.private).equal(isPrivate)
        })
    })

    it('Create a new collection successfully with all fields', function() {
        CollectionHelpers.createNewCollection(token, title, description, false)
        cy.get('@postResp').then((resp) => {
            cy.validateSchema(CreateNewCollectionSchema, resp.body)
            expect(resp.status).eq(POST_STATUS.SUCCESS)
            expect(resp.body.title).equal(title)
            expect(resp.body.description).equal(description)
            expect(resp.body.private).equal(!isPrivate)
        })
    })

    it('Create a new collection successfully with mandatory fields', function() {
        CollectionHelpers.createNewCollection(token, title, "", "")
        cy.get('@postResp').then((resp) => {
            expect(resp.status).eq(POST_STATUS.SUCCESS)
            expect(resp.body.title).equal(title)
            expect(resp.body.description).equal(null)
            expect(resp.body.private).equal(false)
        })
    });

    it('Create a new collection unsuccessfully with unauthorized user', function() {
        CollectionHelpers.createNewCollection('', title, description, isPrivate)
        cy.get('@postResp').then((resp) => {
            expect(resp.status).eq(POST_STATUS.UNAUTHORIZED)
            expect(resp.body.errors.toString()).equal(RESPONSE_MESSAGE.MSG_UNAUTHORIZED_USER)
        })
    });

    it('Create a new collection unsuccessfully with incorrect type of "private" field', function() {
        CollectionHelpers.createNewCollection(token, title, description, "string")
        cy.get('@postResp').then((resp) => {
            expect(resp.status).eq(POST_STATUS.ERROR)
            expect(resp.body.errors.toString()).equal(RESPONSE_MESSAGE.MSG_INVALID_DATA_TYPE_PRIVATE)
        })
    });
});