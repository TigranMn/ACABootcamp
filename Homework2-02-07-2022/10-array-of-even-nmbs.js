let number = 456879;
function getEvensFromNmb(number) {
  let tempArr = String(number).split("");
  return tempArr.map((el) => +el).filter((el) => el % 2 === 0);
}
console.log(getEvensFromNmb(number));
