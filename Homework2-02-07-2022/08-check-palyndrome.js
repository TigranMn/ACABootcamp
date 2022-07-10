let str = "paLindrvkvrdnilap";
function checkPalyndrome(str) {
  let reversed = "";
  let tempArr = str.split("");
  let length = tempArr.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    reversed += tempArr.pop();
  }
  if (tempArr.length !== reversed.length) {
    reversed += tempArr[tempArr.length - 1];
  }
  return reversed.toLowerCase() === tempArr.join("").toLowerCase();
}
console.log(checkPalyndrome(str));
