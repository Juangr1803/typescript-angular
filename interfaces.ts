type Dni = number;

interface Person {
  height?: number;
  age: number;
  name: string;
  lastname: string;
  dni: Dni;
}

const person: Person = {
  // height: 10,
  age: 2,
  name: 'Juan',
  lastname: 'Gonzalez',
  dni: 342523,
};
