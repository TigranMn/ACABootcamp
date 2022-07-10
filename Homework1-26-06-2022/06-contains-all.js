function hasAllItems(firstArr, secondArr) {
  if (firstArr.length < secondArr.length) {
    return false;
  }

  let tempArr = [...firstArr];
  for (let i = 0; i < secondArr.length; i++) {
    if (!isIncluded(secondArr, tempArr, i)) {
      return false;
    }
  }
  return true;
}

function isIncluded(secondArr, tempArr, i) {
  for (let j = 0; j < tempArr.length; j++) {
    if (secondArr[i] === tempArr[j]) {
      tempArr[j] = NaN;
      return true;
    }
  }
  return false;
}

console.log(hasAllItems([1, 1, 2, 3, 4, 5, 6], [5, 1, 2, 4, 5]));
