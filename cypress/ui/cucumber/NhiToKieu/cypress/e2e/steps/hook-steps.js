import { Before, Given } from "@badeball/cypress-cucumber-preprocessor";
import { AccountHelper } from "../../utils/api/account-helper";

Before({tags: "@token"}, function() {
    AccountHelper.generateToken()
    cy.get('@postResp').then((resp) =>{        
        window.localStorage.setItem('getTokenResp', JSON.stringify(resp.body))
    })
})