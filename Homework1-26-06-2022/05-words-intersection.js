let arr1 = ["dog", "cat", "parrot"];
let arr2 = ["lizard", "rat", "cat"];
function findIntersection(firstArr, secondArr) {
  let intersection = [];
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      if (firstArr[i] === secondArr[j]) {
        intersection[intersection.length] = firstArr[i];
        break;
      }
    }
  }
  return intersection;
}

console.log(findIntersection(arr1, arr2));
