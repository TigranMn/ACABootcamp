// Array.prototype.mySplice = function(start=0, deleteCount= this.length - start, ...args) {
//    if (deleteCount < 0) {
//       deleteCount = 0
//    }
//    if(typeof deleteCount !== 'number' || typeof deleteCount === NaN ) {
//       return []
//    }

//    if(start < 0) {
//       start = this.length + start
//       if(start < 0) {
//          start = 0
//       }
//    }

//    let removed = []
//    for(let i = start; i < start + deleteCount; i++) {
//       removed.push(this[i])
//    }

//    let tempArr = []
//    for(let i = 0; i < start ; i++) {
//       tempArr.push(this[i])
//    }

//    for(let i = 0; i< args.length; i++) {
//       tempArr = [...tempArr,args[i]]
//    }
//    let secondPart = []
//    for(let i = start + deleteCount; i< this.length; i++) {
//       secondPart.push(this[i])
//    }
//    tempArr = [...tempArr,...secondPart]

//    for(let i=0; i< tempArr.length; i++) {
//       this[i] = tempArr[i]
//    }
//    this.length = tempArr.length
//    return removed
// }

// let arr = [1,2,3,4,50]
// console.log(arr.splice(2,2,'dada','lala'))
// console.log(arr)

// const toyota1 = {
//    model: 'Toyota',
//    type: 'Camry',
//    logModel(){
//        console.log(this.model, this.type);
//    }
// }

// const toyota2 = {
//    model: 'Toyota',
//    type: 'Rav4',
// }
// toyota1.logModel.call(toyota2)

// function CarConstructor(model, year){
//    if(!new.target) {
//       console.log('Write it with using new keyword')
//       return
//    }
//    this.mode = model;
//    this.year = year;
//    console.log(this)
// }
// let toyota = CarConstructor('toyota', 32)

// const inventory = {

//    cars: [],

//    addCar(...cars) {
//       cars.forEach(el => {
//        this.cars.push(el)
//       })
//    },

//    removeCar(id) {
//        this.cars.find((el,i,arr) => {
//          if(el === id) {
//             arr.splice(i,1)
//             return true
//          }
//        } )
//    },

//    listCars(){
//       console.log(this.cars);
//    },

//    listCarsByConditionCallback(conditionCallback){
//        for (let i = 0; i < this.cars.length; i++) {
//          if(conditionCallback(this.cars[i], i, this.cars)) {
//             console.log(this.cars[i])
//          }
//        }
//    }

// }
// console.log(inventory);
// inventory.addCar('Nissan','Toyota','Lamba')
// console.log(inventory);
// inventory.listCars()
// inventory.listCarsByConditionCallback(el => el === 'Nissan' || el === 'Lamba')

// const checkKnow = {
//    surname: 'surname',
//    name: 'checkKnow',
//    foo: {
//        name: 'foo',
//        logName(){
//            console.log(this.surname);
//        }
//    },
//    boo(){
//        const obj = {
//            name: 'boo method',
//            check: () => {
//                console.log(this.name);
//            }
//        }
//        obj.check();
//    }
// }


// checkKnow.foo.logName();
// checkKnow.boo();
// // console.log(checkKnow)
// let arr = [1,2,1,2,3,4,1,2,3,1]
// let arr1 = [1,2,5,6,7,9,1,2]
// function unique(arr,arr1) {
//    let res = new Set(arr)
//    arr1.forEach(el => 
//       res.add(el))
//       return res
// }
// console.log(unique(arr,arr1))
function Calculator(number1,number2,operator) {
   return function(number1) {console.log(number1)}
}
let calc = new Calculator()
console.log(calc)