Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
   if(fromIndex >= this.length || this.length === 0) {
      return false
   }
   if(fromIndex < 0) {
      fromIndex = this.length + fromIndex
   }
   if(fromIndex < 0) {
      fromIndex = 0
   }
   for(let i = fromIndex; i < this.length; i++) {
      if(this[i] === searchElement || (isNaN(this[i]) && isNaN(searchElement))) {
         return true
      }
   }
   return false
}
let arr = [1,2,3,4,'a',NaN]
console.log(arr.myIncludes(NaN,2))
