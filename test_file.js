const getProduct =  async ()=>{
    try{
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        let productArr = data.products       
        let priceArr = []        
        for(let i =0; i < productArr.length; i++) {
            priceArr.push(productArr[i].price)            
        }         
        let minPrice = Math.min(...priceArr)    
        let productsWithMinPrice = productArr.filter((elem) => elem.price == minPrice)    
        console.log(`The product with least price is ${productsWithMinPrice[0].title} costing only N${minPrice}`)
    }
    catch(error) {
        console.log(error.message)
    }  
    
     
}

console.log(getProduct())