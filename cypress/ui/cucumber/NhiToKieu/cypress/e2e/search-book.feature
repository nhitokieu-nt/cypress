Feature: Search book with multiple results

  Scenario Outline: Search book with multiple results
    Then the user is on Book Store page
    When the user inputs book name
      | keyword   |
      | <keyword> |
    Then all books match with input criteria will be displayed

    Examples: 
      | keyword |
      | Design  |
      | design  |
