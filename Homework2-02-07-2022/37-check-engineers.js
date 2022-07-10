const employees = [
  {
    firstName: "Porty",
    lastName: "Simoni",
    email: "psimoni0@opensource.org",
    salary: "$1762.39",
    profession: "engineer"
  },
  {
    firstName: "Roderick",
    lastName: "MacPeake",
    email: "rmacpeake1@people.com.cn",
    salary: "$1152.05",
    profession: "engineer"
  },
  {
    firstName: "Lina",
    lastName: "Doige",
    email: "ldoige2@mashable.com",
    salary: "$1010.70",
    profession: "engineer"
  },
  {
    firstName: "Zarah",
    lastName: "Kindread",
    email: "zkindread3@barnesandnoble.com",
    salary: "$1171.28",
    profession: "engineer"
  },
  {
    firstName: "Theda",
    lastName: "Drinkhall",
    email: "tdrinkhall4@japanpost.jp",
    salary: "$1873.56",
    profession: "engineer"
  },
  {
    firstName: "Hewie",
    lastName: "Loyley",
    email: "hloyley5@uol.com.br",
    salary: "$1695.93",
    profession: "engineer"
  },
  {
    firstName: "Carma",
    lastName: "McTavish",
    email: "cmctavish6@nytimes.com",
    salary: "$1368.00",
    profession: "engineer"
  }
];

function checkSalary(collection, profession) {
  return collection.every((el) => {
    return el.profession === profession;
  });
}

console.log(checkSalary(employees, "engineer"));
