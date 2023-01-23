export class Login
{
    usernamePlaceholder='#InputEmail'
    passwordTxt='#InputPassword1'
    loginBtn='#landingpage_login_btn>span[class="lay-outstyle"]'
    siginButton ='#signin_button'


    visitSite(url){
        cy.visit(url)

    }

    clickLogin(){
        cy.get(this.loginBtn).click()

    }

    setUsername(name){
        cy.get(this.usernamePlaceholder).type(name)
    }
    setPassword(passwordDetails){
        cy.get(this.passwordTxt).type(passwordDetails)
    }

    getsignInButton(){
        cy.get(this.siginButton).click()
    }



}



