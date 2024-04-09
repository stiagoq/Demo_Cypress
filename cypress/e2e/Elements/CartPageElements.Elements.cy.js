import "cypress-xpath"

export class CartPageElements{
 static get elements(){
    return{
        get buttonRemove(){
            return cy.xpath('//div[@class="cart_item"]/div/div/button').then(($element)=>{
                var lengthRemove = $element.length
                var randomRemove = Math.floor(Math.random() * lengthRemove) + 1
                cy.xpath(`//div[@class="cart_item"][${randomRemove}]/div/div/button`)
            })
        },

        get buttonCheckout(){
            return cy.xpath('//button[@id="checkout"]')
        },

        get listOfBuy(){
            return cy.xpath('//div[@class="cart_list"]')
        },

        get textCartPage(){
            return cy.xpath('//span[@class="title"]')
        }
    }
 }
}