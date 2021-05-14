class Transports {
  private velocity: number;
  private formOfMobility: string;

  constructor(velocity: number, formOfMobility: string) {
    this.velocity = velocity;
    this.formOfMobility = formOfMobility;
  }

  getVelocity() {
    return this.velocity;
  }

  setVelocity(velocity: number) {
    this.velocity = velocity;
  }

  getFormOfMobility() {
    return this.formOfMobility;
  }

  setFormOfMobility(formOfMobility: string) {
    this.formOfMobility = formOfMobility;
  }
}

const transport: Transports = new Transports(20, 'street');

class Auto extends Transports {
  private quantityOfDoors: number;

  constructor(
    velocity: number,
    formOfMobility: string,
    quantityOfDoors: number
  ) {
    super(velocity, formOfMobility);
    this.quantityOfDoors = quantityOfDoors;
  }

  getVelocity() {
    // return 'My velocity es of a car and is of :' + super.getVelocity();
    return super.getVelocity();
  }

  getQuantityOfDoors() {
    return this.quantityOfDoors;
  }

  setQuantityOfDoors(quantityOfDoors: number) {
    this.quantityOfDoors = quantityOfDoors;
  }
}

const car: Auto = new Auto(20, 'street', 4);
