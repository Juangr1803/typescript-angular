export {};

// target = element that extend your functionality "Person"
// key = element that are extend "sayMyName"

function log(target: any, key: any) {
  console.log(target);
  console.log(key + 'Will be called');
}

class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Extend funtionality of a method
  @log
  sayMyName() {
    return this.name;
  }
}

const person: Person = new Person('Juan');

console.log(person.sayMyName()); // Juan // 'sayMyName will be called;
