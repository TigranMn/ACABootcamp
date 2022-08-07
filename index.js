
// Exercise 7 Shopping Cart
class Product {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}
class ShoppingCart {
  constructor(products = []) {
    this.products = products;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(product) {
    let productIndex = this.products.indexOf(product);
    this.products.splice(productIndex, 1);
  }
  totalPrice() {
    let totalSum = this.products.reduce(
      (current, item) => current + item.price,
      0
    );
    let obj = this.products.reduce((current, item) => {
      if (current[item.name]) {
        current[item.name]++;
      } else {
        current[item.name] = 1;
      }
      return current;
    }, {});
    for (let key in obj) {
      if (obj[key] >= 3) {
        let price = this.products.find((product) => product.name === key).price;
        totalSum -= ((obj[key] - (obj[key] % 3)) / 3) * price;
      }
    }
    if (this.products.length >= 5) {
      return (totalSum * 90) / 100;
    } else {
      return totalSum;
    }
  }
}
const cart1 = new ShoppingCart();
const product1 = new Product('Cola', 'drink', 500);
const product2 = new Product('Coffee', 'drink', 300);
cart1.addProduct(product1);
cart1.addProduct(product2);
cart1.addProduct(product2);
cart1.addProduct(product2);
cart1.addProduct(product2);
console.log(cart1.products);
console.log(cart1.totalPrice());