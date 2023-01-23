export class Update{

    btnEditProfile='div[class="editprofilebtn mt-6 mr-4"]>a'
    organizationTitleField='div[class="form-group"]>input[placeholder="Full name"]'
    //emailAddressField = ' div[class="form-group"]>input[placeholder="your@email.com"]'
    categoryField ='body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > select:nth-child(2)'
    describtionField='div[class="input-group-date"]>textarea'
    websiteField='div[class="form-group"]>input[placeholder="eg. http://yourwebsite.com"]'
    regionfield='body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > select:nth-child(2)'
    digitalAddress='input[placeholder="eg. AK-039-5028"]'
    townField='input[placeholder="eg. Anaji"]'
    saveBtn='.btn.btn-primary.btn-block.businessProfilesave.mb-1.mt-5'
    closeUpdate ='.prompt > .btn'


    editProfile(){
        cy.get(this.btnEditProfile).click()
    }

    organizationTitle(organization){
        cy.get(this.organizationTitleField).clear().type(organization)
    }
    categoryFieldText(category){
        cy.get(this.categoryField).select(category)
        
    }
    describtion(describeProduct){
        cy.get(this.describtionField).clear().type(describeProduct)

    }
    website(webAddress){
        cy.get(this.websiteField).clear().type(webAddress)
    }
    Region(getRegion){
        cy.get(this.regionfield).select(getRegion)
    }
    digitalLocation(address){
        cy.get(this.digitalAddress).clear().type(address)

    }
    town(townName){
        cy.get(this.townField).clear().type(townName)
    }
    saveDetails(){
        cy.get(this.saveBtn).click()
    }
    
    close(){
        cy.get(this.closeUpdate).click()

    }
    



    
   


    
}