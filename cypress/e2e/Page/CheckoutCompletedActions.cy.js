import "lodash"
import { CheckoutCompletePageElements } from "../Elements/CheckoutCompletePageElements.cy";

export class CheckoutCompletedActions{
    static verifyTextCheckoutCompletedPage(text){
        CheckoutCompletePageElements.elements.textCheckoutCompletedPage.should("contain.text", text)
    }
    static verifyListOfInfoBuy(){
        CheckoutCompletePageElements.elements.listOfInfoBuy.should("exist")
        CheckoutCompletePageElements.elements.listOfInfoBuy.should("be.visible")

    }

    static verifyItemsListOfInfoBuy(){
        CheckoutCompletePageElements.elements.itemsListOfInfoBuy.find("div").should("be.visible")
    }

    static clickOnButtonFinish(){
        CheckoutCompletePageElements.elements.buttonFinish.click()
    }

    static verifyPayment(){
        CheckoutCompletePageElements.elements.textPayment.should("be.visible")
    }

    static verifyTextShoppingInfo(){
        CheckoutCompletePageElements.elements.textShoppingInfo.should("be.visible")
    }

    static verifyTextPriceTotal(){
        CheckoutCompletePageElements.elements.textPriceTotal.should("be.visible")
    }

    static verifyImage(){
        CheckoutCompletePageElements.elements.image.should("be.visible")
    }

    static verifyTextBuy(text){
        CheckoutCompletePageElements.elements.textSuccessfulBuy.should("have.text", text)
    }
}