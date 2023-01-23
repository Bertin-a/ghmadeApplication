import {MakeAPurchase} from "../pages/makeAPurchase";
import { AddProduct } from "../pages/addProduct";
const addProduct = new AddProduct
const makeAPurchase = new MakeAPurchase()

describe('Purchase',()=>{
    it('Purchase item', () => {
        cy.logIntoApp()
        addProduct.Clickmarket()
        addProduct.validationOfMarketPlacePage()
        makeAPurchase.checkout()
        
      });

})

