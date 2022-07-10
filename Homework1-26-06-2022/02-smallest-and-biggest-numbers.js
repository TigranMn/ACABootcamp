function findMinAndMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}

console.log(findMinAndMax([-42, 1, 2, 3, 8, 9, 40, -40, 5, 6, -4, -6, 46]));
