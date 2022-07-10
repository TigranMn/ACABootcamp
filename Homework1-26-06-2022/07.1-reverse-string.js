function reverseStr(str) {
  let i = 0;
  let j = str.length;
  while (i < j) {
    if (str[i] !== str[j - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
}

console.log(reverseStr("brraarrb"));
