import 'cypress-file-upload'
export class GetAJob{
    jobLink= 'body>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(5)>div:nth-child(3)>a'
    jobPortal ='.dropdown.show > .dropdown-menu > [href="/jobs/viewjobsandapply"]'
    verifyJobPage='[class="jobbanner-text-header"]'
    job='body>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(4)>div:nth-child(4)'
    uploadBtn ='input[type="file"]'
    applyBtn='button[class="btn btn-primary applyjob-buttons"]'
    comfirmApplicationPage='[class="modalheading mt-8"]'
    continueBtn='[id="placeorder_button"]'
    comfirmApplicationSent='body>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(5)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>p'
    closeBtn ='[class="btn btn-primary"]'


    getAjobFromList(){
        cy.get(this.jobLink).click()
        cy.get(this.jobPortal).click()
        cy.wait(2000)
        cy.get(this.verifyJobPage).should('be.visible')
        cy.get(this.job).click()
        cy.get(this.uploadBtn).attachFile('cv.pdf')
        cy.wait(3000)
        cy.get(this.applyBtn).click()
        cy.get(this.comfirmApplicationPage).should('be.visible')
        cy.get(this.continueBtn).click()
        cy.wait(10000)
        cy.get(this.comfirmApplicationSent).should('be.visible')
        cy.get(this.closeBtn).click()


    }



}