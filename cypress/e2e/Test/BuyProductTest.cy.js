import { NavegateTo } from "../Constant/NavegateTo.cy";
import Data from "../Data/urlTest.json"
import DataCredentials from "../Data/credentialsPage.json"
import DataAssertions from "../Data/Asserions.json"
import { LoginActions } from "../Page/LoginActions.cy";
import { ProductActions } from "../Page/ProductActions.cy";
import { CartActions } from "../Page/CartActions.cy";
import { CheckoutActions } from "../Page/CheckoutActions.cy";
import { CheckoutCompletedActions } from "../Page/CheckoutCompletedActions.cy";
import { RandomData } from "../Utils/RandomData";

describe("Buy flow", ()=>{

    beforeEach(function(){
        NavegateTo.navegateTo(Data.ulrSauceDemo)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        LoginActions.insertUsername(DataCredentials.username)
        LoginActions.insertPassword(DataCredentials.password)
        LoginActions.verifyButtonLogin()
        LoginActions.clickOnButtonLogin()
        ProductActions.verifyTextSuccessfulLogin(DataAssertions.textSuccessfulLoginAssertion)
        cy.clearAllSessionStorage()
    })

    it("Buy product", function(){
       ProductActions.clickOnButtonAddbikeLight()
       ProductActions.verifySelectFilter()
       ProductActions.clickOnButtonSelectFilter(RandomData.randomNumber())
       ProductActions.clickOnButtonAddFleeceJacke()
       ProductActions.clickOnButtonAddTshirt()
       ProductActions.verifyTextTshirt()
       ProductActions.verifyButtonCart()
       ProductActions.clickOnButtonCart()

       CartActions.verifyTextCartPage(DataAssertions.textCartAssertion)
       CartActions.verifyListOfBuy()
       CartActions.verifyButtonRemove()
       CartActions.clickOnButtonRemove()
       CartActions.verifyButtonCheckout()
       CartActions.clickOnButtonCheckout()

       CheckoutActions.vertifyTextCheckoutPage(DataAssertions.textCheckoutAssertion)
       CheckoutActions.verifyInputFirstname()
       CheckoutActions.insertFirstname(RandomData.randomString())
       CheckoutActions.verifyInputLastname()
       CheckoutActions.inserLastname(RandomData.randomString())
       CheckoutActions.verifyInputPostalCode()
       CheckoutActions.insertPostalCode(RandomData.randomNumber())
       CheckoutActions.verifyButtonContinue()
       CheckoutActions.clickOnButtonContinue()

       CheckoutCompletedActions.verifyTextCheckoutCompletedPage(DataAssertions.textCheckoutCompletedAssertion1)
       CheckoutCompletedActions.verifyListOfInfoBuy()
       CheckoutCompletedActions.verifyItemsListOfInfoBuy()
       CheckoutCompletedActions.verifyPayment()
       CheckoutCompletedActions.verifyTextShoppingInfo()
       CheckoutCompletedActions.verifyTextPriceTotal()
       CheckoutCompletedActions.clickOnButtonFinish()

       CheckoutCompletedActions.verifyTextCheckoutCompletedPage(DataAssertions.textCheckoutCompletedAssertion2)
       CheckoutCompletedActions.verifyImage()
       CheckoutCompletedActions.verifyTextBuy(DataAssertions.textSuccessfulBuyAssertion)
    })

})