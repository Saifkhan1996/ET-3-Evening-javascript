//=============== Function Methodes===========
const person = {
  fname: "jhon",
  lname: "wick",
  getfullname(phone, rank) {
    return this.fname + " " + this.lname + " " + phone + " " + rank;
  },
};
// console.log(person.getfullname());
const persontwo = {
  fname: "jhon",
  lname: "snow",
};
// we are using getfullname method for persontwo object by apllying fucntion method that is "call"
// console.log(person.getfullname.call(persontwo, 9876543210));
// 'apply" fucntion method uses more than two argiments first is owning object and rest are in an array
// console.log(person.getfullname.apply(persontwo, [9876543210, "A"]));
// it gives of copy of an object and it redeclare the function as new fucntion and following are the two methodes to use bind methode and we need to provide paranthesis to it just because of it is redeclaring functions
// console.log(person.getfullname.bind(persontwo, 9876543210, "a")());
// console.log(person.getfullname.bind(persontwo)(9876543210, "a"));
// ==========PRACTICE===================
const softwares = {
  courses: ["java", "react", "HTML"],
  type: "software",
  getsoftwarename() {
    return `${this.courses}:- ${this.type}`;
  },
};
// console.log(softwares.getsoftwarename());
const s2 = {
  courses: ["css", "nodejs"],
  type: "hardware",
};
// console.log(softwares.getsoftwarename.call(s2));
// console.log(softwares.getsoftwarename.apply(s2));
console.log(softwares.getsoftwarename.bind(s2)());
