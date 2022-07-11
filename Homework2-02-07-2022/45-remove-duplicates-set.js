let arr = [1,2,3,1,1,null,null,1,2,3]
function removeDuplicates(arr) {
   let mySet = new Set()
   Array.from(arr, el => mySet.add(el))
   return mySet
}
console.log(removeDuplicates(arr))
