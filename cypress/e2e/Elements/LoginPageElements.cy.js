import "cypress-xpath"

export class LoginPageElements{
    static get elements(){
        return{
            get inputUsername(){
                return cy.xpath('//input[@id="user-name"]')
            },

            get inputPassword(){
                return cy.xpath('//input[@id="password"]')
            },

            get buttonLogin(){
                return cy.xpath('//input[@id="login-button"]')
            },

            get textErrorLogin(){
                return cy.xpath('//div[@class="error-message-container error"]/h3')
            }
        }
    }
}