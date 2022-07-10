function isPalindrome(str) {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}
let str = "anNa";
console.log(isPalindrome(str));
