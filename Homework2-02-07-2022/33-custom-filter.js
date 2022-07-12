Array.prototype.myFilter = function (callBack,thisArg= this) {
   let filteredArr = []
  for (let i=0; i<thisArg.length; i++) {
     if(callBack(arr[i],i,arr)) {
        filteredArr.push(thisArg[i])
     } 
  }
  return filteredArr
}
let arr = [1,2,3,4,6,7,8]
console.log(arr.myFilter((el,index) => {
 return el < 5
}))
