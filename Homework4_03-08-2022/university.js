class University {
  constructor() {
    this.teachers = []
    this.students = []
  };
  addMember(member) {
     member.role === 'Student' ? this.students.push(member)
                               : this.teachers.push(member)
  }
  removeMember(member) {
     if(member.role === 'Student') {
       this.students =  this.students.filter(el => el.id !== member.id)
     } else {
       this.teachers = this.teachers.filter(el => el.id !== member.id)
     }
  };
  startLesson() {
     this.teachers.forEach(el => el.energy-= 5)
     this.students.forEach(el => el.energy-= 2)
  }
}

class UniversityMember {
  constructor(id,name,age,energy = 24) {
    if(typeof name === 'string') {
      this.name = name
    } 
    if(typeof age === 'number' && !isNaN(age)) {
      this.age = age
    }
    if(typeof energy === 'number' && !isNaN(energy)) {
     this.energy = energy
   }
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

let student1 = new Student(1,'Tiko',22,50)
let teacher1 = new Teacher(2,'Davo',29,55)
let student2 = new Student(3,'Suro',21,45)
let university = new University()
university.addMember(student1)
university.addMember(teacher1)
university.addMember(student2)

university.startLesson()
console.log(university)
