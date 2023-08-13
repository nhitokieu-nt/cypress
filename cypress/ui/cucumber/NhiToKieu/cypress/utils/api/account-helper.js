import { ACCOUNT_ENDPOINT } from "./api-constants"
import { getHeaders } from "./header-helper"
import { RequestHelper } from "./request-helper"

export const AccountHelper = {
    generateToken() {
        RequestHelper.sendPostRequest(
            ACCOUNT_ENDPOINT.ENDPOINT_GENERATE_TOKEN, undefined,
            {
                userName: Cypress.env('userName'),
                password: Cypress.env('password')
            }
        )
    },

    loginWithApi(username, userId, token, expires) {
        cy.setCookie('userName', username)
        cy.setCookie('userID', userId)
        cy.setCookie('token', token)
        cy.setCookie('expires', expires)
    }
}