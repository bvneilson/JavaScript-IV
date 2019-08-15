// CODE here for your Lambda Classes
class Person {
  constructor (props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }

  speak () {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}. ${this.catchPhrase}`);
  }
}

class Instructor extends Person {
  constructor (props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo (subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade (student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  modifyGrade (student) {
    let num = Math.ceil(Math.random() * (20 + 20)) - 20;
    student.grade += num;
  }
}

class Student extends Person {
  constructor (props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }

  listsSubjects () {
    console.log(`${this.name}\'s favorite subjects are:`)
    this.favSubjects.map(subject => console.log(subject));
    console.log(`=========`);
  }
  PRAssignment (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge (subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate () {
    if (this.grade > 70) {
      console.log(`Grade: ${this.grade}. ${this.name} is ready to graduate!`);
    } else {
      console.log(`Grade: ${this.grade}. ${this.name} can\'t graduate yet. Back to grading!`);
    }
  }
}

class TeamLead extends Instructor {
  constructor (props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp (channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode (student, subject) {
    console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`);
  }
}

// Instructors
const sheev = new Instructor({
  name: 'Sheev Palpatine',
  location: 'Naboo',
  age: 80,
  favLanguage: 'CSS',
  specialty: 'Unlimited power',
  catchPhrase: `Did you ever hear the tragedy of Darth Plagueis the Wise`
});

const obi = new Instructor({
  name: 'Obi-Wan Kenobi',
  location: 'High ground',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'The force',
  catchPhrase: `Hello there`
});

// Students
const anakin = new Student({
  name: 'Anakin Skywalker',
  location: 'Tatooine',
  age: 25,
  previousBackground: 'Podracer',
  className: 'Apprentice1',
  favSubjects: [
    'Padme',
    'Immortality',
    'Podracing',
    'Sand'
  ],
  grade: 80
});

const youngling = new Student({
  name: 'Sors Bandeam',
  location: 'Jedi Temple',
  age: 10,
  previousBackground: 'Newborn',
  className: 'YC123',
  favSubjects: [
    'The Force',
    'Planets & Systems',
    'Techniques with Yoda'
  ],
  grade: 60
});

// TLs
const mace = new TeamLead({
  name: 'Mace Windu',
  location: 'Jedi Council Chamber',
  age: 40,
  gradClassName: 'JC1',
  favInstructor: 'Yoda'
});

const maul = new TeamLead({
  name: 'Darth Maul',
  location: 'Falling',
  age: 30,
  gradClassName: 'SL1',
  favInstructor: 'Sheev Palpatine'
});

// Tests
sheev.speak();
obi.demo('HELLO THERE');
mace.standUp('#jedi_council');
maul.debugsCode(anakin, 'JavaScript');
anakin.listsSubjects();

// Stretch Test
obi.modifyGrade(anakin);
anakin.graduate();
