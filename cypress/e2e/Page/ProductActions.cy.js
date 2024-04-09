import { ProductsPageElements } from "../Elements/ProductsPageElements.cy";
import { RandomData } from "../Utils/RandomData";

export class ProductActions{
    static vertifyUrlProducts(){
        cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
    }

    static verifyTextSuccessfulLogin(text){
        ProductsPageElements.elements.textSuccesfullLogin.should("have.text", text)
    }

    static verifyButtonCart(){
        ProductsPageElements.elements.buttonCart.should("be.visible")
        ProductsPageElements.elements.buttonCart.should("exist")

    }

    static verifySelectFilter(){
        ProductsPageElements.elements.selectFilter.should("be.visible")
        ProductsPageElements.elements.selectFilter.should("be.enabled")
        ProductsPageElements.elements.selectFilter.should("have.descendants", "option")
    }

    static clickOnButtonSelectFilter(num){
        ProductsPageElements.elements.selectFilter.select(num)
    }

    static clickOnButtonAddbikeLight(){
        ProductsPageElements.elements.buttonAddbikeLight.click()
    }

    static clickOnButtonAddFleeceJacke(){
        ProductsPageElements.elements.buttonAddFleeceJacket.click()
    }

    static clickOnButtonAddTshirt(){
        ProductsPageElements.elements.buttonAddTshirt.click()
    }

    static clickOnButtonCart(){
        ProductsPageElements.elements.buttonCart.click()
    }

    static verifyTextTshirt(){
        ProductsPageElements.elements.textTshirt.should("exist")
    }
}