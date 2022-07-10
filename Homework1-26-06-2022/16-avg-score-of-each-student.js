const evaluations = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Lezvel 0",
    score: 60
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 60
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 25
  }
];
function getStudentsWithLowestAvg(evaluations) {
  let studentsAvg = [];
  for (let i = 0; i < evaluations.length; i++) {
    let score = 0;
    let count = 0;
    let currId = evaluations[i].studentId;
    if (!isIdIncluded(currId, studentsAvg)) {
      studentsAvg.push(examsInfo(currId, score, count));
    }
  }
  let lowestAvgStudentsId = checkIfAvgIsLow(studentsAvg);
  let lowestAvgStudents = [];
  for (let i = 0; i < lowestAvgStudentsId.length; i++) {
    for (let j = 0; j < evaluations.length; j++) {
      if (lowestAvgStudentsId[i] === evaluations[j].studentId) {
        let { courseId, courseName, score, ...result } = evaluations[j];
        lowestAvgStudents.push(result);
        break;
      }
    }
  }

  return lowestAvgStudents;
}
function checkIfAvgIsLow(studentsAvg) {
  let studentsId = [];
  for (let i = 0; i < studentsAvg.length; i++) {
    let currStudent = studentsAvg[i];
    if (currStudent.score / currStudent.count < 40) {
      studentsId.push(currStudent.id);
    }
  }
  return studentsId;
}

function isIdIncluded(id, studensAvgList) {
  for (let i = 0; i < studensAvgList.length; i++) {
    if (id === studensAvgList[i].id) {
      return true;
    }
  }
  return false;
}

function examsInfo(id, score, count) {
  for (let j = 0; j < evaluations.length; j++) {
    if (evaluations[j].studentId === id) {
      score += evaluations[j].score;
      count++;
    }
  }
  return { id, score, count };
}
console.log(getStudentsWithLowestAvg(evaluations));
