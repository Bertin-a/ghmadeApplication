// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>
import { Login } from "../pages/loginPage";
const login = new Login()

Cypress.Commands.add('logIntoApp',()=>{
    
    
    cy
    .fixture('environment').then((env)=>{
     login.visitSite(env.baseurl)
 })

 cy
 .fixture('ghmade').then((details)=>{
     
   login.clickLogin()
   login.setUsername(details.username)
   login.setPassword(details.password)
   login.getsignInButton()

   cy
   .get('span[class="username-ellipsis ml-3"]')
   .should('be.visible')
})
 
    
})

