import { When } from "@badeball/cypress-cucumber-preprocessor"
import { BookStorePage } from "../../pages/book-store-page"

When ('the user is on Book Store page', () => {
    BookStorePage.navigate()
})