function CoffeeShop(name,menu) {
  this.name = name
  this.menu = menu
  this.orders = []
  this.addOrder = (order) => {
    let item = this.menu.find(el => {
      return el.name === order
      })
    if(item) {
      this.orders.push(item)
    } else {
      return 'This item is currently unavailable!'
    }
  }

  this.fulfillOrder = () => {
    if(this.orders.length) {
      
      return `The ${this.orders.shift().name} is ready`
    } 
    return 'All orders have been fulfilled'
  }

  this.listOrders = () => this.orders.map(el => el.name)

  this.dueAmount = () => {
    return  this.orders.reduce((accm,currItem) => {
      return accm + currItem.price
    },0)
  }
  this.cheapestItem = () => {
    let cheapest = this.menu[0]
    this.menu.forEach(el => {
      if(el.price < cheapest.price) {
        cheapest = el
      }
    })
    return cheapest
  }
  this.drinksOnly = () => {
    return this.menu.filter(el => el.type === 'Drink')
                    .map(el => el.name)
  }
  this.foodOnly = () => {
    return this.menu.filter(el => el.type === 'Food')
                    .map(el => el.name)
  }
}

function MenuItem(name,type,price) {
  this.name = name
  this.type = type
  this.price = price
}
let hotCocoa = new MenuItem('Iced tea','Drink',1.50)
let chicken = new MenuItem('Chicken','Food',2.50)
let icedTea = new MenuItem('hot cocoa','Food',1)
let menu = [hotCocoa,chicken,icedTea]
let coffeeShop = new CoffeeShop('Underground', menu)
coffeeShop.addOrder('Chicken')
coffeeShop.addOrder('Iced tea')
console.log(coffeeShop.foodOnly())