function pushIntoCollection(col1, col2) {
  col2.forEach((el) => {
    col1.push(el);
  });
  return col1;
}

let col1 = [{ a: "1" }, { b: "2" }, { c: "3" }];
let col2 = [{ d: "4" }, { e: "5" }, { f: "6" }];

console.log(pushIntoCollection(col1, col2));
