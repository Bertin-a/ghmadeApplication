import {GetAJob} from "../pages/job"
const getAJob = new GetAJob()

describe('Job',()=>{
    it('Get a job', () => {
        cy.logIntoApp()
        getAJob.getAjobFromList()
        
        
      });
      

})
