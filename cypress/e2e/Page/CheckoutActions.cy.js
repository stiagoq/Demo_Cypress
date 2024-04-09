import { CheckoutPageElements } from "../Elements/CheckoutPageElements.cy";

export class CheckoutActions{
    static vertifyTextCheckoutPage(text){
        CheckoutPageElements.elements.textCheckoutPage.should("contain.text", text)
    }

    static insertFirstname(text){
        CheckoutPageElements.elements.inputFirstname.type(text)
    }

    static inserLastname(text){
        CheckoutPageElements.elements.inputLastname.type(text)
    }

    static insertPostalCode(num){
        CheckoutPageElements.elements.inputPostalCode.type(num)
    }

    static clickOnButtonContinue(){
        CheckoutPageElements.elements.buttonContinue.click()
    }

    static verifyInputFirstname(){
        CheckoutPageElements.elements.inputFirstname.should('exist')
    }

    static verifyInputLastname(){
        CheckoutPageElements.elements.inputLastname.should('exist')
    }

    static verifyInputPostalCode(){
        CheckoutPageElements.elements.inputPostalCode.should('exist')
    }

    static verifyButtonContinue(){
        CheckoutPageElements.elements.buttonContinue.should("be.visible")
    }
}