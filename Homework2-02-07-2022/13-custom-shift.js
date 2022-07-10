Array.prototype.myShift = function () {
  if (!this.length) {
    return undefined;
  }
  let deleted = this[0];
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  this.length = this.length - 1;
  return deleted;
};
let arr = [1, 2, 3];
console.log(arr.myShift());
console.log(arr);
