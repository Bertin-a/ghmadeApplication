export class AddProduct{
    marketLink='div[class="d-none dview d-md-flex header-settings"]>a:nth-child(1)'
    marketPlaceLink ='[class="dropdown-menu dropdown-menu-left dropdown-menu-arrow show"]>a:nth-child(4)'
    banner='#carousel-item-1'
    catergoryMarketPlace ='#categoryfilter__div>div:nth-child(1)>select'
    typeOfProduct='#typefilterdiv>div:nth-child(1)>select'
    minimumPrice='#minpricefilter__div>div:nth-child(1)>select'
    maximumPrice='#maxpricefilter__div>div:nth-child(1)>select'
    itemId='#product-row'
    productNameClass='h3[class="product-Name capitalize-text"]'
    getBtnToAdd='div[class="row"]>div:nth-child(2)>div:nth-child(1)>button'
    sucessMessageAlert='div[id="myModal"]>.modal-content>div>p'
    closeMessageBtn ='div[class="prompt"]>a'
    


    Clickmarket(){
        cy.get(this.marketLink).click()
        cy.get(this.marketPlaceLink).click()

    }
    validationOfMarketPlacePage(){
        cy.get(this.banner).should('be.visible')
    }

    catergoryTag(categoryProduct){
        cy.get(this.catergoryMarketPlace).select(categoryProduct)
    }
    
    typeTag(typeProduct){
        cy.get(this.typeOfProduct).select(typeProduct)
    }

    minimumPriceTag(minimumPriceProduct){
        cy.get(this.minimumPrice).select(minimumPriceProduct)

    }
    maximumPriceTag(maximumPriceProduct){
        cy.get(this.maximumPrice).select(maximumPriceProduct)

    }
    
    addToCart(itemName){
        cy.get(this.itemId).contains(itemName, {matchCase: false}).click()
    }

    verifyProdutDetails(itemName){
        cy.get(this.productNameClass).should('have.text',itemName)
    }
    clickBtnToAdd(){
        cy.get(this.getBtnToAdd).click()
    }
    checkSuccessMessage(successMessage){
        cy.get(this.sucessMessageAlert).should('have.text',successMessage)
       
    }
    closeSuccessMessage(){
        cy.get(this.closeMessageBtn).click()

    }
    








}