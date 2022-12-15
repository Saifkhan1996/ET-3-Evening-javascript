// to define class we need CLASS keyword and properties stored in constructor and they can be called outside constructor and it should be called like a constructor with new keyword
class FirstPerson {
  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
  }
  getfullname() {
    return `First Name:${this.firstname} Last Name:${this.lastname}`;
  }
}
// const Person = new FirstPerson("john", "wick");
// console.log(Person);
// console.log(Person.getfullname());
// to link this child class to it's parent class we have to use "EXTENDS KEYWORD" BETWEEN THEIR NAMES.
class childofFirstPerson extends FirstPerson {
  // in this classes if we are calling propeties of parent we need to call it by SUPER() method and super() is compulsory to use "  THIS"keyword in classes and it must be at top of our constructor block
  constructor(phone, fname, lname) {
    super(fname, lname);
    this.phone = phone;
  }
  getphone() {
    return `Contact Number: ${this.phone}`;
  }
}
const childclass = new childofFirstPerson(9876543210, "john", "snow");
// console.log(childclass);
// console.log(childclass.getfullname());
// console.log(childclass.getphone());
// ===============================================================
class Company {
  constructor(cars, price) {
    this.cars = cars;
    this.price = price;
  }
  getDetails() {
    return `Car Name: ${this.cars} Car Price: ${this.price}`;
  }
}
// const cardetails = new Company("mercedes", "12cr");
// console.log(cardetails.getDetails());
class franchise extends Company {
  constructor(owner, cars, price) {
    super(owner, cars, price);
    // this.owner = owner;
  }
}
const a = new franchise("saif khan", "skoda", "2cr");
console.log(a);
