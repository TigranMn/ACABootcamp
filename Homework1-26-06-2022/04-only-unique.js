let arr = [2, 3, 4, 5, 5, 6, 4, "c", "a", "a", "b", "b", 8];
// SLOW VERSION ↓↓↓↓
// function getUniqueValues(arr) {
//   let uniqueValues = [];
//   main: for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) {
//         continue;
//       }
//       if (arr[i] === arr[j]) {
//         continue main;
//       }
//     }
//     uniqueValues.push(arr[i]);
//   }
//   return uniqueValues;
// }

// FASTER VERSION ↓↓↓↓↓↓

// function getUniqueValues(arr) {
//   let uniqueValues = [];
//   let tempArr = [...arr]
//    for (let i = 0; i < tempArr.length; i++) {
//     let isUnique = true
//     if(tempArr[i] === null) {
//       continue
//     }
//     for (let j = i+1; j < tempArr.length; j++) {
//       if (tempArr[i] === tempArr[j]) {
//         tempArr[j]= null
//         isUnique = false
//       }
//     }
//     if(isUnique) {
//       uniqueValues.push(arr[i])
//     };
//   }
//   return uniqueValues;
// }

//  THE FASTEST VERSION ↓↓↓↓
function getUniqueValues(arr) {
  let uniqueValues = [];
  let uniqueValuesObj = {};
  for (let i = 0; i < arr.length; i++) {
    uniqueValuesObj[arr[i]]
      ? (uniqueValuesObj[arr[i]] = false)
      : (uniqueValuesObj[arr[i]] = true);
  }
  let keys = Object.keys(uniqueValuesObj);
  uniqueValues = keys.filter(function (key) {
    return uniqueValuesObj[key];
  });
  return uniqueValues;
}

console.log(getUniqueValues(arr));
