import { BOOKSTORE_ENDPOINT } from "./api-constants"
import { getHeaders } from "./header-helper"
import { RequestHelper } from "./request-helper"

export const BookstoreHelper = {
    addBook(token, userId, isbn) {
        RequestHelper.sendPostRequest(
            BOOKSTORE_ENDPOINT.ENDPOINT_ADD_BOOK, getHeaders(token),
            {
                userId: userId,
                collectionOfIsbns: [{isbn: isbn}]                   
            }
        )
    },    
    
    deleteBook(token, userId, isbn) {
        RequestHelper.sendDeleteRequest(
            BOOKSTORE_ENDPOINT.ENDPOINT_DELETE_BOOK, getHeaders(token),
            {
                isbn: isbn,
                userId: userId
            }
        )
    },

    getAllBooks() {
        RequestHelper.sendGetRequest(
            BOOKSTORE_ENDPOINT.ENDPOINT_GET_ALL_BOOKS
        )
    }
}