Array.prototype.myPop = function () {
  if (!this.length) {
    return undefined;
  }
  let item = this[this.length - 1];
  this.length = this.length - 1;
  return item;
};
let arr = [1, 2, 3];
console.log(arr.myPop());
console.log(arr);
