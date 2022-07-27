Array.prototype.mySplice = function(start=0, deleteCount= this.length - start, ...args) {
   if (deleteCount < 0) {
      deleteCount = 0
   }

   if(start < 0) {
      start = this.length + start
      if(start < 0) {
         start = 0
      }
   }

   let removed = this.slice(start,start + deleteCount)
   let tempArr = [...this]
   tempArr = tempArr.slice(0,start)

   for(let i=0;i<args.length;i++) {
    tempArr  = tempArr.concat(args[i])
   }

   tempArr = tempArr.concat(this.slice(start + deleteCount))
   for(let i = 0;i< tempArr.length;i++) {
      this[i] = tempArr[i]
   }

   this.length= tempArr.length
   return removed
}
 
var arr = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = arr.mySplice(-8,1,'dada','zaza');
console.log(arr)
console.log(removed)



