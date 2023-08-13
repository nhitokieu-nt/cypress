import { Given } from "@badeball/cypress-cucumber-preprocessor"
import { BookstoreHelper } from "../../utils/api/bookstore-helper"
import { AccountHelper } from "../../utils/api/account-helper"
import jp from 'jsonpath'

Given ('the user logs into application', () => {    
    let token = JSON.parse(window.localStorage.getItem('getTokenResp')).token,
        expires = JSON.parse(window.localStorage.getItem('getTokenResp')).expires
    AccountHelper.loginWithApi(Cypress.env('userName'), Cypress.env('userId'), token, expires)
})

Given ('the book named {string} is not in users collection', function(bookTitle) {
    let token = JSON.parse(window.localStorage.getItem('getTokenResp')).token
    BookstoreHelper.getAllBooks()
    cy.get('@getResp').then((resp) => {
        let isbn = jp.query(JSON.parse(JSON.stringify(resp.body)), `$.books[?(@.title == "${bookTitle}")].isbn`)
        BookstoreHelper.deleteBook(token, Cypress.env('userId'), isbn)
    })
})

Given ('there is a book named {string}', function(bookTitle) {    
    let token = JSON.parse(window.localStorage.getItem('getTokenResp')).token
    BookstoreHelper.getAllBooks()
    cy.get('@getResp').then((resp) => {
        let isbn = jp.query(JSON.parse(JSON.stringify(resp.body)), `$.books[?(@.title == "${bookTitle}")].isbn`)
        BookstoreHelper.addBook(token, Cypress.env('userId'), isbn)
    })
})