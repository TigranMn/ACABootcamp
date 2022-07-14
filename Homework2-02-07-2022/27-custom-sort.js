Array.prototype.mySort = function(callback) {debugger
   function mergeSort(arr) {debugger
      if(arr.length<=1) return arr
   let mid = Math.floor(arr.length/2)
   let left = mergeSort(arr.slice(0,mid))
   let right = mergeSort(arr.slice(mid))
    return merge(mergeSort(left), mergeSort(right))
   }
   function merge(left, right) {debugger
        let leftIndex = 0
        let rightIndex = 0
        let sorted = []
        if(typeof callback === 'function') {
      while(leftIndex < left.length && rightIndex<right.length) {debugger
        let res =  callback(left[leftIndex],right[rightIndex])
         if(res < 0) {
            sorted.push(left[leftIndex])
            leftIndex++
         }
         else if (res > 0) {
            sorted.push(right[rightIndex])
            rightIndex++
         }
         else {
            sorted.push(left[leftIndex],right[rightIndex])
            leftIndex++
            rightIndex++
         }
      }
      return [...sorted, ...left.slice(leftIndex), ...right.slice(rightIndex)] 
   }   else {
         while(leftIndex < left.length && rightIndex<right.length) {
         if(left[leftIndex].toString() < right[rightIndex].toString()) {
            sorted.push(left[leftIndex])
            leftIndex++
         } else if( right[rightIndex].toString() < left[leftIndex].toString() ) {
            sorted.push(right[rightIndex])
               rightIndex++
         }
         else {
          let  rightL = right[rightIndex].toString().length
          let leftL = left[leftIndex].toString().length
            if(rightL > leftL) {
               sorted.push(left[leftIndex])
               leftIndex++
            }
            else if(leftL > rightL) {
               sorted.push(right[rightIndex])
               rightIndex++
            } else {
               sorted.push(left[leftIndex],right[rightIndex])
               leftIndex++
               rightIndex++
            }
         }
       }  

          return [...sorted, ...left.slice(leftIndex), ...right.slice(rightIndex)]
        }     
      } 

   return  mergeSort(this)   
}
var things = [150, 6, 68, 70];
console.log(things.sort());
console.log(things.mySort())



