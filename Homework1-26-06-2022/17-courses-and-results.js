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
    courseName: "JS Level 0",
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
function getCoursesAndResults(evaluations) {
  let courseList = [];
  for (let i = 0; i < evaluations.length; i++) {
    let currCourseTotalScore = 0;
    let currCourseExamCount = 0;
    let currId = evaluations[i].courseId;
    if (!isIncluded(currId, courseList)) {
      for (let j = 0; j < evaluations.length; j++) {
        if (currId === evaluations[j].courseId) {
          currCourseTotalScore += evaluations[j].score;
          currCourseExamCount++;
        }
      }
      let { score, studentName, studentId, ...result } = evaluations[i];
      result.totalExams = currCourseExamCount;
      result.avgScore = (currCourseTotalScore / currCourseExamCount).toFixed(2);
      courseList.push(result);
    }
  }
  return courseList;
}

function isIncluded(courseId, courseList) {
  for (let i = 0; i < courseList.length; i++) {
    if (courseId === courseList[i].courseId) {
      return true;
    }
  }
  return false;
}

console.log(getCoursesAndResults(evaluations));
