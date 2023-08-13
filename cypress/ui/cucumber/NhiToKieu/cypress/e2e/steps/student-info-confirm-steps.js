import { Then } from "@badeball/cypress-cucumber-preprocessor"
import dayjs from 'dayjs'
import { StudentInfoConfirmPage } from "../../pages/student-info-confirm-page"

Then ('a successful message {string} is shown', function(message) {
    StudentInfoConfirmPage.getModalTitle().should('have.text', message)
})

Then ('all information of the student form is shown correctly', () => {
    cy.get('@studentInfo').then((studentInfo) => {
        StudentInfoConfirmPage.getStudentName().should('have.text', studentInfo.firstName + " " + studentInfo.lastName)
        StudentInfoConfirmPage.getStudentEmail().should('have.text', studentInfo.email)
        StudentInfoConfirmPage.getGender().should('have.text', studentInfo.gender)
        StudentInfoConfirmPage.getMobile().should('have.text', studentInfo.mobile)
        StudentInfoConfirmPage.getDateOfBirth().should("have.text", studentInfo.dateOfBirth ? studentInfo.dateOfBirth : dayjs().format('DD MMMM,YYYY'))
        StudentInfoConfirmPage.getSubjects().should('have.text', studentInfo.subjects)
        StudentInfoConfirmPage.getHobbies().should('have.text', studentInfo.hobbies)
        StudentInfoConfirmPage.getPicture().should('have.text', studentInfo.picture)
        StudentInfoConfirmPage.getAddress().should('have.text', studentInfo.address)
        let stateCity = studentInfo.state + " " + studentInfo.city
        StudentInfoConfirmPage.getStateAndCity().should('have.text', studentInfo.state ? stateCity : "")
    })
})