class Product {
   constructor(name,type,price,quantity) {
      this.name = name
      this.price = price
      this.type = type
      this.quantity = quantity
   }
}

class ShoppingCart {
   constructor() {
      this.cart = []
   }
   addProduct(product) {
      // Checking if ordered product is included in product list
     const ordered =  productList.find(el => { 
       return  el.name === product.name 
      })

      // If product is not included in product list or it has spared, throw an error
      if(!ordered.quantity) {
         throw new Error(`${ordered.name} is not available`)
      }

      // Checking if ordered product is already included in the cart
      const toAdd = this.cart.find(el => el.name === product.name)

      // Add the ordered product to the cart or increase its quantity
      if(toAdd) {
         toAdd.quantity +=1
      } else {
         this.cart.push({...product})
         this.cart[this.cart.length-1].quantity = 1
      }

      // Decrease the quantity of product in product list
      ordered.quantity -= 1
   }

   removeProduct(product) {

      // Checking if product is included in the cart
      const productToRemove = this.cart.find(el => el.name === product.name)

      // If not,throw an error
      if(!productToRemove) {
         throw new Error(`${product.name || product} is not in your cart`)
      }

      // Decreasing the quantity of product in cart, if it equals to 0, delete the product from cart
      productToRemove.quantity -= 1
      if(!productToRemove.quantity) {
         this.cart.splice(this.cart.indexOf(productToRemove),1)
      }

      // Increasing the products quantity in products list
      productList.find(el => el.name === product?.name).quantity += 1
   }

   totalPrice() {
      let totalPrice = 0
      let productQuantity = 0
      const productTypeQuantity = {}

      // Getting total price of all products in cart, their quantity, and product type quantity
      this.cart.forEach(el => {
         totalPrice += el.quantity * el.price
         productQuantity+= el.quantity
         if(productTypeQuantity[el.type]) {
            productTypeQuantity[el.type] += el.quantity
         } else {
            productTypeQuantity[el.type] = el.quantity
         }
      })

      // Giving one product for free for every third product of the same type bought 
      for(let productType in productTypeQuantity) {
         const item = productTypeQuantity[productType]
         if(item > 3) {
            totalPrice -= productList.find(el => el.type === productType).price * Math.floor(item/3)
               
         }
      }

      // Giving discount if more than 5 products were bought
      if(productQuantity >= 5) {
         totalPrice -= totalPrice * 10 / 100
      }
      return totalPrice
   }

   replace(productName, replacementProduct) {
    const index =  productList.findIndex(el => el.name === productName)
    productList.splice(index,1,replacementProduct)
   }
}

const pencil = new Product('Pencil','Pencil', 2.50,1)
const pen = new Product('Pen','Pen', 3,5)
const sticker = new Product('Sticker','Sticker',1,7)
const pees = new Product('Canned Pees','Canned Pees',5,5)
const corn = new Product('Canned Corn','Canned Corn',4.50,3)
const productList = [pencil,pen,sticker,pees,corn]

const cart = new ShoppingCart()
cart.addProduct(sticker)
cart.addProduct(sticker)
cart.addProduct(sticker)
cart.addProduct(sticker)
cart.addProduct(sticker)
cart.addProduct(pees)
cart.addProduct(pees)
cart.addProduct(pees)
cart.addProduct(pees)
cart.removeProduct(pees)
cart.replace('Pencil',new Product('Chicken','Chicken',6,2))
console.log(cart.totalPrice())


console.log(cart)
console.log(productList)