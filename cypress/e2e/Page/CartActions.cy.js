import { CartPageElements } from "../Elements/CartPageElements.Elements.cy";

export class CartActions{
    static verifyUrlCartPage(){
        cy.url().should("eq", "https://www.saucedemo.com/cart.html")
    }
    
    static verifyTextCartPage(text){
        CartPageElements.elements.textCartPage.should("have.text", text)
    }

    static verifyListOfBuy(){
        CartPageElements.elements.listOfBuy.should("exist")
        CartPageElements.elements.listOfBuy.should("be.visible")
    }

    static clickOnButtonRemove(){
        CartPageElements.elements.buttonRemove.click()
    }

    static verifyButtonRemove(){
        CartPageElements.elements.buttonRemove.should('be.visible')
        CartPageElements.elements.buttonRemove.should("be.enabled")
    }

    static clickOnButtonCheckout(){
        CartPageElements.elements.buttonCheckout.click()
    }

    static verifyButtonCheckout(){
        CartPageElements.elements.buttonCheckout.should("be.visible")
        CartPageElements.elements.buttonCheckout.should("be.enabled")
    }
}