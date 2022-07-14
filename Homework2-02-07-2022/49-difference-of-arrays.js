function findDifference( arr1, arr2) {
   return [...arr1.filter(el => !arr2.includes(el)),...arr2.filter(el => !arr1.includes(el))];
}
let arr1 = [1,2,3,4,5,6,6,8,9]
let arr2 = [6,7,8,9,10,11]
console.log(findDifference(arr1,arr2))