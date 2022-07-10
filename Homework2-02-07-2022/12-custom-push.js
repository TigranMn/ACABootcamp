Array.prototype.myPush = function (...items) {
  let arr = this;
  for (let item of items) {
    arr[arr.length] = item;
  }
  return arr.length;
};
let arr = [1, 2, 3];
console.log(arr.myPush(5, 6, "abc", 7, null));
console.log(arr);
