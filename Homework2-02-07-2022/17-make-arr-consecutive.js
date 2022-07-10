let arr = [1, 2, 3, 6, 9];
function makeConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] - 1 && i !== arr.length - 1) {
      arr.splice(arr[i], 0, arr[i] + 1);
    }
  }
  return arr;
}
console.log(makeConsecutive(arr));
