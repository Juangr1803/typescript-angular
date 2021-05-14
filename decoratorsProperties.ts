export {};

// target class Person
// Element "name"

function logProperty(target, key) {
  let _val = this[key]; // Juan
  const getter = () => {
    console.log(`Get: ${key} => ${_val}`); // Get: name => Juan
    return _val; // Juan
  };

  const setter = (newValue) => {
    console.log(`Set: ${key} => ${newValue}`); // Set: name => Platzi
    _val = newValue; // Platzi
  };

  const objectProperty = {
    get: getter,
    set: setter,
  };

  // Content the extend, Who extend, Object
  Object.defineProperty(target, key, objectProperty);
}

class Person {
  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p: Person = new Person('Juan');

p.name = 'Platzi'; // Set: name => 'Platzi'
const name = p.name; // Get: name => 'Platzi'
