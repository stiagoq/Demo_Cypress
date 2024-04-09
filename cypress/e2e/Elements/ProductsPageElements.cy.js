import "cypress-xpath"

export class ProductsPageElements{
    static get elements(){
        return{
            get textSuccesfullLogin(){
                return cy.xpath('//div[@class="header_secondary_container"]/span')
            },

            get selectFilter(){
                return cy.xpath('//span[@class="select_container"]/select')
            },

            get buttonAddbikeLight(){
                return cy.xpath('//div[@class="pricebar"]/button[@id="add-to-cart-sauce-labs-bike-light"]')
            },

            get buttonAddFleeceJacket(){
                return cy.xpath('//div[@class="pricebar"]/button[@id="add-to-cart-sauce-labs-fleece-jacket"]')
            },

            get buttonAddTshirt(){
                return cy.xpath('//div[@class="pricebar"]/button[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
            },

            get  buttonCart(){
                return cy.xpath('//div[@id="shopping_cart_container"]/a')
            },

            get textTshirt(){
                return cy.xpath('//a/div[@class="inventory_item_name "]')
            }
        }
    }
}