function segregateStringsNumbers(array) {
  let strings = [];
  let numbers = [];
  for (let i = 0; i < array.length; i++) {
    typeof array[i] === "string"
      ? (strings[strings.length] = array[i])
      : (numbers[numbers.length] = array[i]);
  }
  return {
    strings,
    numbers
  };
}

console.log(segregateStringsNumbers(["s", 5, "v", 6, "t"]));
