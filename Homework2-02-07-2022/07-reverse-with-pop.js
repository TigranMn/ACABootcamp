let arr = [1, 2, 3, "abc", NaN];
function popReverse(arr) {
  let tempArr = [...arr];
  let res = [];
  while (tempArr.length) {
    res.push(tempArr.pop());
  }
  return res;
}

console.log(popReverse(arr));
