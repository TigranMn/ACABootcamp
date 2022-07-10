const employees = [
  {
    firstName: "Porty",
    lastName: "Simoni",
    email: "psimoni0@opensource.org",
    salary: "$1762.39",
    profession: "engineer",
    gender: "male"
  },
  {
    firstName: "Roderick",
    lastName: "MacPeake",
    email: "rmacpeake1@people.com.cn",
    salary: "$1152.05",
    profession: "engineer",
    gender: "male"
  },
  {
    firstName: "Lina",
    lastName: "Doige",
    email: "ldoige2@mashable.com",
    salary: "$1010.70",
    profession: "engineer",
    gender: "male"
  },
  {
    firstName: "Zarah",
    lastName: "Kindread",
    email: "zkindread3@barnesandnoble.com",
    salary: "$1171.28",
    profession: "engineer",
    gender: "male"
  },
  {
    firstName: "Theda",
    lastName: "Drinkhall",
    email: "tdrinkhall4@japanpost.jp",
    salary: "$1873.56",
    profession: "engineer",
    gender: "male"
  },
  {
    firstName: "Hewie",
    lastName: "Loyley",
    email: "hloyley5@uol.com.br",
    salary: "$1695.93",
    profession: "engineer",
    gender: "male"
  },
  {
    firstName: "Carma",
    lastName: "McTavish",
    email: "cmctavish6@nytimes.com",
    salary: "$1368.00",
    profession: "IT",
    gender: "female"
  }
];

function checkSalary(collection, name) {
  return collection.find((el) => {
    return el.firstName === name;
  });
}

console.log(checkSalary(employees, "Carma"));
