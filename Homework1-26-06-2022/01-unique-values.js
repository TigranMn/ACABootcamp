function getUniqueValues(arr) {debugger
  let uniqueValues = {};
  arr.forEach((el) => {
    uniqueValues[el] ? (uniqueValues[el] += 1) 
                     : (uniqueValues[el] = 1);
  });
  for (let val in uniqueValues) {debugger
    uniqueValues[val] !== 1 ? delete uniqueValues[val] 
                            : "";
  }
  return Object.keys(uniqueValues);
}

console.log(
  getUniqueValues([2, 3, 6, 3, 4, 5, 5, 6, 4, "a", "a", "b", "b", 8])
);
