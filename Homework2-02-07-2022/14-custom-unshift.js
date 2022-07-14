Array.prototype.myUnshift = function (...item) {
  for (let j = item.length - 1; j >= 0; j--) {
    length = this.length;
    let temp1 = this[0];
    let temp2 = 0;
    for (let i = 0; i < length; i++) {
      temp2 = this[i + 1];
      this[i + 1] = temp1;
      temp1 = temp2;
    }
    this[0] = item[j];
  }
  return this.length;
};
let arr = [1, 2, 3, 4];

console.log(arr);
console.log(arr.myUnshift(5, 6, [-3]));
console.log(arr)
