Feature: Delete book
    As a user, I would like to delete book from my collection successfully
    @token
    Scenario: Delete book successfully
        Given the user logs into application
        And there is a book named "Git Pocket Guide"
        When the user is on the Profile page
        Then the user search book "Git Pocket Guide"
        And the user clicks on Delete icon
        And the user clicks on OK button
        And the user clicks on OK button of alert "Book deleted."
        Then the book is not shown