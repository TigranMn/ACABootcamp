let arr = [1, 2,2,2,2, 3, 6, 9,9,9,9];
function makeConsecutive(arr) {debugger
  for (let i = 0; i < arr.length; i++) {debugger
    if(arr[i] === arr[i+1]) {
      continue
    }
    if (arr[i] !== arr[i + 1] - 1 && i !== arr.length - 1) {debugger
      arr.splice(i+1, 0, arr[i] + 1);
    }
  }
  return arr;
}
console.log(makeConsecutive(arr));
