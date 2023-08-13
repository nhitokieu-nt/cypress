import { UrlConstants } from "../constants/url-constants"

const TXT_FIRST_NAME = "#firstName"
const TXT_LAST_NAME = "#lastName"
const TXT_EMAIL = "#userEmail"
const RD0_GENDER_OPTION = (gender) => `//div[@id='genterWrapper']//label[text()='${gender}']`
const TXT_MOBILE = "#userNumber"
const TXT_DATE_BIRTH = "#dateOfBirthInput"
const TXT_SUBJECT = "#subjectsInput"
const CHK_HOBBIES = (hobbies) => `//div[@id='hobbiesWrapper']//label[text()='${hobbies}']`
const BTN_CHOOSE_FILE = "#uploadPicture"
const TXT_CURRENT_ADDRESS = "#currentAddress"
const DDL_STATE = "#state"
const DDL_CITY = "#city"
const LBL_STATE_OPTION = (state) => `//div[@id='state']//div[text()='${state}']`
const LBL_CITY_OPTION = (city) => `//div[@id='city']//div[text()='${city}']`
const BTN_SUBMIT = "#submit"

export const RegisterFormPage = {
    navigate(){
        cy.visit(UrlConstants.REGISTER_STUDENT_FORM_URL)
    },
    inputFirstName(firstName){
        cy.get(TXT_FIRST_NAME).type(firstName)
    },
    inputLastName(lastName){
        cy.get(TXT_LAST_NAME).type(lastName)
    },
    inputEmail(email){
        cy.get(TXT_EMAIL).type(email)
    },
    selectGender(gender){
        cy.xpath(RD0_GENDER_OPTION(gender)).click()

    },
    inputMobile(mobile){
        cy.get(TXT_MOBILE).type(mobile)
    },
    selectDateOfBirth(){
        cy.get(TXT_DATE_BIRTH).click()
    },
    selectSubjects(subjects){
        for (let subject of subjects.split(', ')) {
            cy.get(TXT_SUBJECT)
            .type(subject)
            .type('{enter}')
        }
    },
    selectHobbies(hobbies){
        for (let hobby of hobbies.split(', ')) {
            cy.xpath(CHK_HOBBIES(hobby)).click()
        }
    },
    inputCurrentAddress(address){
        cy.get(TXT_CURRENT_ADDRESS).type(address)
    },
    uploadPicture(picturePath){
        cy.get(BTN_CHOOSE_FILE).attachFile(picturePath)
    },
    selectState(state){
        cy.get(DDL_STATE).click(),
        cy.xpath(LBL_STATE_OPTION(state)).click()
    },
    selectCity(city){
        cy.get(DDL_CITY).click(),
        cy.xpath(LBL_CITY_OPTION(city)).click()
    },
    clickSubmitBtn(){
        cy.get(BTN_SUBMIT).click()
    },
}