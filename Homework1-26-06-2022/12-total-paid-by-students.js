const payments = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020 // The payment year
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023
  }
];

function getEachStudentsTotalPayment(paymentsList) {
  let totalPayments = [];
  for (let i = 0; i < paymentsList.length; i++) {
    let currStudentsPaymentsAmount = 0;
    let currId = paymentsList[i].studentId;
    if (!isIncluded(currId, totalPayments)) {
      for (let j = 0; j < paymentsList.length; j++) {
        if (currId === paymentsList[j].studentId) {
          currStudentsPaymentsAmount += paymentsList[j].payedAmount;
        }
      }
      let { payedAmount, year, ...copy } = paymentsList[i];
      copy.totalPayed = currStudentsPaymentsAmount;
      totalPayments.push(copy);
    }
  }
  return totalPayments;
}

function isIncluded(id, totalPaymentList) {
  for (let i = 0; i < totalPaymentList.length; i++) {
    if (id === totalPaymentList[i].studentId) {
      return true;
    }
  }
  return false;
}

console.log(getEachStudentsTotalPayment(payments));
