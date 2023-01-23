export class MakeAPurchase{
    getCart ='a[class="nav-link icon carticon"]'
    viewCartBtn ='button[class="viewemptycart btn btn-primary"]'
    placeAnOrder ='button[class="checkoutbtn mb-5 mt-1  ml-0 justify-content-center btn btn-primary"]'
    continueBtn ='form>div:nth-child(1)>div:nth-child(1)>button'
    comfirmationTxt ='body>div:nth-child(1)>div:nth-child(3)>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>p'
    closeBtn ='[class="prompt"]>a'
    

    checkout(){
        cy.get(this.getCart).click()
        cy.get(this.viewCartBtn).click()
        cy.get(this.placeAnOrder).click()
        cy.get(this.continueBtn).click()
        cy.wait(2000)
        cy.get(this.comfirmationTxt).should('be.visible')
        cy.get(this.closeBtn).click()
    }

}