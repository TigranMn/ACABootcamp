let arr = [1, 456, 2, "abc", 3, { a: "ruru" }, [], NaN, null, undefined];
Array.prototype.myToString = function () {
  let res = "";
  for (let i = 0; i < this.length; i++) {
    if (arr[i] === undefined || arr[i] === null) {
      i === this.length - 1 ? (res += "") : (res += ",");
    } else {
      i === this.length - 1
        ? (res += String(arr[i]))
        : (res += String(arr[i]) + ",");
    }
  }
  return res;
};
console.log(arr.myToString());
console.log(arr.toString());
