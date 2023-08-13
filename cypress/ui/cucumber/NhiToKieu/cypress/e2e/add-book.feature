Feature: Add book to collection
        As a user, I want to add book to collection

  @token
  Scenario: Add book to collection successfully    
    Given the user logs into application
    And the book named "Git Pocket Guide" is not in users collection
    When the user is on Book Store page
    Then the user selects a book "Git Pocket Guide"
    And the user clicks on Add To Your Collection
    And an alert message "Book added to your collection." is shown
    Then book is shown in users profile
