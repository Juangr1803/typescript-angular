export {};

// target is class P

function init(target) {
  return class extends target {
    name = 'Juan';
    lastname = 'Gonzalez';

    sayMyName() {
      return `${this.name} ${this.lastname}`;
    }
  };
}

@init
class P {
  constructor() {}

  sayMyName() {}
}

const p: P = new P();
console.log(p.sayMyName()); // Juan Gonzalez
