// function Person(name, id, age) {
//   this.id = id;
//   this.name = name;
//   this.age = age;
//   this.friends = [];

//   this.addFriend = function (person) {
//     this.hasFriend(person)
//       ? console.log("Already friend")
//       : this.friends.push(person);
//   };

//   this.hasFriend = function (person) {
//     return this.friends.some((el) => {
//       return el.id === person.id;
//     });
//   };

//   this.searchFriends = function (filtersList) {
//     return this.friends.filter((el) => {
//       for (let filter in filtersList) {
//         if (filtersList[filter] !== el[filter]) {
//           return false;
//         }
//         return true;
//       }
//     });
//   };
// }
// const Despacito = new Person("Despacito", 1, 22);
// const Vahe = new Person("Vahe", 2, 23);
// const Arman = new Person("Arman", 3, 22);
// const Suren = new Person("Suren", 4, 21);
// const Despacito2 = new Person("Despacito", 6, 22);

// Suren.addFriend(Arman);
// Suren.addFriend(Vahe);
// Suren.addFriend(Despacito);
// Suren.addFriend(Vahe);
// Suren.addFriend(Despacito2);
// console.log(Suren.searchFriends({ name: "Despacito", age: 22 }));
let a = {
  name: 'dada'
}
Object.defineProperty(a, 'age' ,{ value: 21
})
console.log(a)
console.log(Object.keys(a))