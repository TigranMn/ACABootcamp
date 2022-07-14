//first solution
function isArray(input) {
   return Array.isArray(input)
}

// second solution 
function isArray2(input) {
   return input instanceof Array
}
console.log(isArray2([]))