const BTN_OK = "#closeSmallModal-ok"

export const ModalDialog = {
    clickOkBtn() {
        cy.get(BTN_OK).click()
    },
}