import { LoginPageElements } from "../Elements/LoginPageElements.cy";

export class LoginActions{

    static verifyTitlePageLogin(){
        cy.title().should("eq", "Swag Labs")
    }

    static insertUsername(username){
        LoginPageElements.elements.inputUsername.type(username)
    }

    static verifyInputUsername(){
        LoginPageElements.elements.inputUsername.should("be.visible")
        LoginPageElements.elements.inputUsername.should("be.enabled")
    }

    static insertPassword(password){
        LoginPageElements.elements.inputPassword.type(password)
    }

    static verifyInputPassword(){
        LoginPageElements.elements.inputPassword.should("be.visible")
        LoginPageElements.elements.inputPassword.should("be.enabled")
    }

    static verifyButtonLogin(){
        LoginPageElements.elements.buttonLogin.should("be.visible")
        LoginPageElements.elements.buttonLogin.should("be.enabled")
        LoginPageElements.elements.buttonLogin.should("have.id", "login-button")
    }

    static clickOnButtonLogin(){
        LoginPageElements.elements.buttonLogin.click()
    }

    static verifyTextErrorLogin(text){
        LoginPageElements.elements.textErrorLogin.should("have.text", text)
        LoginPageElements.elements.textErrorLogin.should("be.visible")
    }

    
}