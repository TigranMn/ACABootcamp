let arr = [1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7];
function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(removeDuplicates(arr));
