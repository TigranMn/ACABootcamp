let arr = [1, 2, 3, 5, 6, 7, 9];
function getLastNElements(arr, n) {
  return arr.slice(arr.length - n, arr.length);
}
console.log(getLastNElements(arr, 2));
