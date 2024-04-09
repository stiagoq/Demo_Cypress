import "cypress-xpath"

export class CheckoutCompletePageElements{
    static get elements(){
        return{
            get textCheckoutCompletedPage(){
                return cy.xpath('//span[@class="title"]')
            },

            get listOfInfoBuy(){
                return cy.xpath('//div[@class="summary_info"]')
            },

            get itemsListOfInfoBuy(){
                return cy.xpath('//div[@class="summary_info"]')
            },

            get buttonFinish(){
                return cy.xpath('//button[@class="btn btn_action btn_medium cart_button"]')
            },

            get textPayment(){
                return cy.xpath('//div[@data-test="payment-info-label"]')
            },
            
            get textShoppingInfo(){
                return cy.xpath('//div[@data-test="shipping-info-label"]')
            },

            get textPriceTotal(){
                return cy.xpath('//div[@data-test="total-info-label"]')
            },

            get image(){
                return cy.xpath('//img[@class="pony_express"]')
            },

            get textSuccessfulBuy(){
                return cy.xpath('//h2[@class="complete-header"]')
            }
        }
    }
}