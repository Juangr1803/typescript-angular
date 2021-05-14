let a: string = 'Hello';
a = 'Holas';
// a = 2

let b: number = 10;
// b = a;
b = 20;
b = 10 + 10;
const num1 = 10;
const num2 = 20;
b = num1 + num2;

function sum(num1: number, num2: number): number {
  // return num1 + num2 + 'hola';
  return num1 + num2;
}

let anyValue: any = 10;
anyValue = 'Bye';

sum(1, 2);

function sumJSVanilla(num1, num2) {
  return num1 + num2;
}

// Create type custom

type dni = number;

let dniNumber: dni = 34141;
let dniNumber2: dni = 34141;
