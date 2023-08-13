import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { DatePicker } from "../../pages/shared/date-picker";
import { RegisterFormPage } from "../../pages/student-registration-form-page";


Given('the user is on Student Registration Form page', () => {
    RegisterFormPage.navigate()
})

When ('the user inputs valid data', ((dataTable) => {
    dataTable.hashes().forEach((element) => {
        cy.wrap(element).as('studentInfo')
        if (element.firstName) {
            RegisterFormPage.inputFirstName(element.firstName)
        }
        if (element.lastName) {
            RegisterFormPage.inputLastName(element.lastName)
        }
        if (element.email) {
            RegisterFormPage.inputEmail(element.email)
        }
        if (element.gender) {
            RegisterFormPage.selectGender(element.gender)
        }
        if (element.mobile) {
            RegisterFormPage.inputMobile(element.mobile)
        }
        if (element.dateOfBirth) {
            RegisterFormPage.selectDateOfBirth()
            DatePicker.selectDate(element.dateOfBirth)
        }
        if (element.subjects) {
            RegisterFormPage.selectSubjects(element.subjects)
        }
        if (element.hobbies) {
            RegisterFormPage.selectHobbies(element.hobbies)
        }
        if (element.picture) {
            RegisterFormPage.uploadPicture(element.picture)
        }
        if (element.address) {
            RegisterFormPage.inputCurrentAddress(element.address)
        }
        if (element.state) {
            RegisterFormPage.selectState(element.state)
        }
        if (element.city) {
            RegisterFormPage.selectCity(element.city)
        }
    })
}))

When ('the user clicks on Submit button', () => {
    RegisterFormPage.clickSubmitBtn()   
})