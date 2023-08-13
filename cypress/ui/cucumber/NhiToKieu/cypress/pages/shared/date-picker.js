const LBL_CURRENT_MONTH_YEAR = "div#dateOfBirth div[class*='current-month']"
const DDL_MONTH = "select[class*='month']"
const DDL_YEAR = "select[class*='year']"
const LBL_DAY_OPTION = (day) => `//div[not(contains(@class, 'outside-month')) and text()='${day}']`

export const DatePicker = {
    selectDate(date){
        var inputDate = new Date(date)
        cy.get(LBL_CURRENT_MONTH_YEAR).invoke('text').then((currentMonthYear) => {
            var arrays = currentMonthYear.split(' ')
            var currentDate = new Date("01 " + arrays[0] + "," + arrays[1])

            if (inputDate.getFullYear() != currentDate.getFullYear()) {
                cy.get(DDL_YEAR).select(inputDate.getFullYear().toString())
            }
            if (inputDate.getMonth() != currentDate.getMonth()) {
                cy.get(DDL_MONTH).select(inputDate.getMonth().toString())
            }
            cy.xpath(LBL_DAY_OPTION(inputDate.getDate())).click()
        })
    }
}