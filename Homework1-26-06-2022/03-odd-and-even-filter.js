function filterOddEven(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0
      ? (even[even.length] = arr[i])
      : (odd[odd.length] = arr[i]);
  }
  return { odd, even };
}

console.log(filterOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
