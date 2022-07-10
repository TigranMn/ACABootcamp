function getUniqueValues(arr) {
  let uniqueValues;
  main: for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (arr[i] === arr[j]) {
        continue main;
      }
    }
    uniqueValues = arr[i];
  }
  return uniqueValues;
}

console.log(
  getUniqueValues([2, 3, 6, 3, 4, 5, 5, 6, 4, "a", "a", "b", "b", 8])
);
