import { NavegateTo } from "../Constant/NavegateTo.cy"
import Data from "../Data/urlTest.json"
import DataCredentials from "../Data/credentialsPage.json"
import DataAssertions from "../Data/Asserions.json"
import { LoginActions } from "../Page/LoginActions.cy"
import { RandomData } from "../Utils/RandomData"
import { ProductActions } from "../Page/ProductActions.cy"

describe("Login flow", ()=>{
    beforeEach(function(){
        NavegateTo.navegateTo(Data.ulrSauceDemo)
        LoginActions.verifyTitlePageLogin()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.clearAllSessionStorage()
    })

    it("Login successful", function(){
        LoginActions.insertUsername(DataCredentials.username)
        LoginActions.verifyInputUsername()
        LoginActions.insertPassword(DataCredentials.password)
        LoginActions.verifyInputPassword()
        LoginActions.verifyButtonLogin()
        LoginActions.clickOnButtonLogin()
        ProductActions.vertifyUrlProducts()
        ProductActions.verifyTextSuccessfulLogin(DataAssertions.textSuccessfulLoginAssertion)
    })

    it("Login error", function(){
        LoginActions.insertUsername(RandomData.randomString())
        LoginActions.verifyInputUsername()
        LoginActions.insertPassword(RandomData.randomString())
        LoginActions.verifyInputPassword()
        LoginActions.verifyButtonLogin()
        LoginActions.clickOnButtonLogin()
        LoginActions.verifyTextErrorLogin(DataAssertions.textErrorLoginAssertion)
    })

    it("Login loked", function(){
        LoginActions.insertUsername(DataCredentials.lokedUsername)
        LoginActions.verifyInputUsername()
        LoginActions.insertPassword(DataCredentials.password)
        LoginActions.verifyInputPassword()
        LoginActions.verifyButtonLogin()
        LoginActions.clickOnButtonLogin()
        LoginActions.verifyTextErrorLogin(DataAssertions.testLokedErrorLoginAssertion)
    })
})