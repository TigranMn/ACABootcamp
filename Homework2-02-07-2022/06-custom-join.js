let arr = [null, 1, 2, {}, [], NaN, undefined, "abc"];
Array.prototype.myJoin = function (separator = ",") {
  let res = "";
  for (let i = 0; i < this.length; i++) {
    if (arr[i] === undefined || arr[i] === null) {
      i === this.length - 1 ? (res += "") : (res += "" + separator);
    } else {
      i === this.length - 1
        ? (res += String(arr[i]))
        : (res += String(arr[i]) + separator);
    }
  }
  return res;
};

console.log(arr.join("//"));
console.log(arr.myJoin("//"));
