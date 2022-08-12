class University {
  constructor() {
    this.teachers = []
    this.students = []
  };
  addMember (...member){
    member.forEach(el => {
      el.role === "Student" ? this.students.push(el)
                            : this.teachers.push(el)
})
}
  removeMember(...member) {
      member.forEach(person => {
        person.role === 'Student' ?  this.students =  this.students.filter(el => el.id !== person.id)
                                  :  this.teachers = this.teachers.filter(el => el.id !== person.id)
     })
  }
  startLesson() {
     this.teachers.forEach(el => el.energy-= 5)
     this.students.forEach(el => el.energy-= 2)
  }
}

class UniversityMember {
  constructor(id,name,age,energy = 24) {
    this.name = String(name)
    this.age = age
    this.energy = energy
    this.id = id
  }
  info() {
    return this
  }
}

class Student extends UniversityMember {
  constructor(id,name,age,energy) {
    super(id,name,age,energy)
    this.role = 'Student'
  }
}

class Teacher extends UniversityMember {
  constructor(id,name,age,energy) {
    super(id,name,age,energy)
    this.role = 'Teacher'
  }
}

const firstStudent = new Student(1,'Tiko',22,50)
const firstTeacher = new Teacher(2,'David',27,55)
const secondStudent = new Student(3,'Suro',21,45)
const secondTeacher = new Teacher (4,'Armen',25,30)
const university = new University()
university.addMember(firstStudent,secondStudent,firstTeacher,secondTeacher)
university.removeMember(secondTeacher,secondStudent)

university.startLesson()
console.log(university)
