function getMaxElement(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr[arr.length - 1];
}
let arr = [2, 3, 5, 6, 1, 15, 8, 9];
console.log(getMaxElement(arr));
