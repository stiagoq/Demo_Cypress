import "cypress-xpath"

export class CheckoutPageElements{
    static get elements(){
        return{
            get textCheckoutPage(){
                return cy.xpath('//span[@class="title"]')
            },

            get inputFirstname(){
                return cy.xpath('//input[@id="first-name"]')
            },

            get inputLastname(){
                return cy.xpath('//input[@id="last-name"]')
            },

            get inputPostalCode(){
                return cy.xpath('//input[@id="postal-code"]')
            },

            get buttonContinue(){
                return cy.xpath('//input[@id="continue"]')
            }
        }
    }
}