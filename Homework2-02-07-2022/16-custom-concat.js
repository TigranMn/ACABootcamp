Array.prototype.myConcat = function(...args) {
   let newArr=[...this]
   for(let arg of args) {
      if(Array.isArray(arg)) {
      newArr.push(...arg)
      }
      else {
         newArr.push(arg)
      }
   }
   return newArr
}
let arr = [1,2,3]
let arr1 = [3,4,5]
let arr3 = [6,7,8]
let i = arr.concat(arr1,arr3,26)
console.log(i)
arr3[0] = 20
console.log(i)