import { AddProduct } from "../pages/addProduct";
const addProduct = new AddProduct()

describe('Cart',()=>{

    it('Add To Cart', () => {

        cy.fixture('addToCart').then((cartTags)=>{
            cy.logIntoApp()
            addProduct.Clickmarket()
            addProduct.validationOfMarketPlacePage()
            addProduct.catergoryTag(cartTags.categoryProduct)
            addProduct.typeTag(cartTags.typeProduct)
            addProduct.minimumPriceTag(cartTags.minimumPriceProduct)
            addProduct.maximumPriceTag(cartTags.maximumPriceProduct)
            addProduct.addToCart(cartTags.itemName)
            cy.wait(5000)
            addProduct.verifyProdutDetails(cartTags.itemName)
            addProduct.clickBtnToAdd()
            addProduct.checkSuccessMessage(cartTags.successMessage)
            addProduct.closeSuccessMessage()
      })
      
      });

})

