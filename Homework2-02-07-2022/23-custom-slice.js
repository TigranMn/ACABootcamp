Array.prototype.mySlice = function(start = 0,end = this.length) {
   if (start > this.length) {
      return []
   }
   if(start < 0) {
      start = this.length + start
      if(start < 0) {
         start = 0
      }
   }
   if(end < 0) {
      end = this.length + end
   }
   let newArr = []
   for(let i = start; i < end; i++) {
      newArr.push(this[i])
   }
   return newArr
}
let arr = [1,2,4,5,6,4,5,'a']
let my = arr.mySlice(1,-4)
let his = arr.slice(1,-4)
console.log(my)
console.log(his)
arr[2][0] = 45
console.log(my)
console.log(his)
