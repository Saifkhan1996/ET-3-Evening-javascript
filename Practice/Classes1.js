class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    return `Car Name:${this.name} Mfg Year:${this.year}`;
  }
}

// const mycar = new car("skoda", 2014);

// console.log(mycar);
class carparts extends car {
  constructor(door, window) {
    super("skoda", 2020);
    this.door = door;
    this.window = window;
  }
  getparts() {
    return `Door name:${this.door} window material:${this.window}`;
  }
}
// let myparts = new carparts("Right Door", "Glass");
// console.log(myparts.getparts());
// console.log(myparts.getparts());
