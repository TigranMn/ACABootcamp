let arr = [1, 2, 3, 5, 6, 7, 9];
function getFirstNElements(arr, n) {
  return arr.slice(0, n);
}
console.log(getFirstNElements(arr, 2));
