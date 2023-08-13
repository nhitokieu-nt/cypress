Feature: Register Student Form
    As a student, I want to register student form

  Background: Execute before each scenario
    Given the user is on Student Registration Form page

  Scenario Outline: Register student form successfully
    When the user inputs valid data
      | firstName   | lastName   | email   | gender   | mobile   | dateOfBirth   | subjects   | hobbies   | address   | picture   | state   | city   |
      | <firstName> | <lastName> | <email> | <gender> | <mobile> | <dateOfBirth> | <subjects> | <hobbies> | <address> | <picture> | <state> | <city> |
    When the user clicks on Submit button
    Then a successful message "Thanks for submitting the form" is shown
    Then all information of the student form is shown correctly

    Examples: 
      | firstName | lastName | email                   | gender | mobile     | dateOfBirth      | subjects               | hobbies       | address           | picture     | state | city  |
      | Nhi       | To Kieu  | tokieunhi1412@gmail.com | Female | 0987654321 | 14 December,2001 | Maths, Arts, Chemistry | Music, Sports | 123 Naming Street | picture.jpg | NCR   | Delhi |
      | Nhi       | To       |                         | Female | 0987654321 |                  |                        |               |                   |             |       |       |
