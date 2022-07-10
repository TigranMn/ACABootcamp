function removeDuplicates(arr1, arr2) {
  let res = [];
  let concatted = arr1.concat(arr2);
  concatted.forEach((el) => {
    if (!res.includes(el)) {
      res.push(el);
    }
  });
  return res;
}
let arr = [1, 2, 3, 3, 4, 6, 7, 7, 9];
let arr1 = [2, 3, 4];
console.log(removeDuplicates(arr, arr1));
