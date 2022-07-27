let arr1 = ["dog", "cat", "parrot",];
let arr2 = ["lizard", "rat", "cat",'cat','cat'];
function findIntersection(firstArr, secondArr) {
  let intersection = new Set(firstArr);
  return new Set(secondArr.filter(el => {
   return intersection.has(el)
  }))
}

console.log(findIntersection(arr1, arr2));
