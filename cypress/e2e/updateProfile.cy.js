const update = new Update()
import { Update } from "../pages/updateProfile";

describe('Update',()=>{
    it('Update profile', () => {
        cy.logIntoApp()
        cy
        .fixture('updateProfile').then((updateProfileDetails)=>{
          update.editProfile()
          cy.wait(5000)
          update.organizationTitle(updateProfileDetails.organization)
          update.categoryFieldText(updateProfileDetails.category)
          update.describtion(updateProfileDetails.describeProduct)
          update.website(updateProfileDetails.webAddress)
          update.Region(updateProfileDetails.getRegion)
          update.digitalLocation(updateProfileDetails.address)
          update.town(updateProfileDetails.townName)
          update.saveDetails()
          cy.wait(5000)
          update.close()
        })
    });

})
