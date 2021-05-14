export {};

class Person {
  private age: number;
  private height: number;
  private dni: string;

  constructor(age: number, height: number, dni: string) {
    this.age = age;
    this.height = height;
    this.dni = dni;
  }
}

class Student extends Person {
  private matricule: string;

  constructor(age: number, height: number, dni: string, matricule: string) {
    super(age, height, dni);
    this.matricule = matricule;
  }
}

let person: Person = new Person(27, 1.69, '36601731');
let student: Student = new Student(27, 1.69, '36601731', '123');

person = student;
// student = person;
