// what is "this" keyword?
// this keyword refers to an object and it can be used depending on conditionsl
// if "this" is inisde a methode it will refer to it's parent object and use always arrow function to avoid errors
const movies = {
  tittles: ["iron man", "hulk", "captain america"],
  category: "action",
  getmovie() {
    const result = this.tittles.map(function (item) {
      return `${item} - ${this.category}`;
    }, this);
    return result;
    // console.log(this.category);
    // console.log(this.clearinterval);
  },
};
// console.log(movies.getmovie());
// ============ Regular function ==================
//  if "this" is used in any function it will refers to global objects in node and window objects in browser.
// function something(){
//     return console.log(this.clearinterval)
// }
// console.log(getsomething())
// movies.getmovies()
// ============ Constructor function===============
// constructor function without new keyword refers to global and window object and with new keyword it refers to object created by new keywors
function getactionmovies() {
  this.ratings = 4.5;
  this.tittles = ["iron man", "hulk", "thor"];
  return this;
}
// console.log(new getactionmovies());
// ========== FOR CALLBACK FUNCTION============
const movies1 = {
  tittles: ["iron man", "hulk", "captain america"],
  category: "action",
  getmovie() {
    const result = this.tittles.map((item) => {
      return `${item} - ${this.category}`;
    });
    return result;
  },
};
// console.log(movies1.getmovie());
// ================= practice================
const cars = {
  company: ["marcedes", "farari", "mghector"],
  category: "fourwheeler",
  getcars() {
    // console.log(this);
  },
};
cars.getcars();
// =========================================
const cars1 = {
  company: ["marcedes", "farari", "mghector"],
  category: "fourwheeler",
  getcars() {
    const res = this.company.map(function (item) {
      return `${item} - ${this.category}`;
    }, this);
    return res;
  },
};
// getcars();
// console.log(cars1.getcars());
// ==========================================
const cars2 = {
  company: ["marcedes", "farari", "mghector"],
  category: "fourwheeler",
  getcars() {
    const res1 = this.company.map((item) => {
      return `${item} - ${this.category}`;
    });
    return res1;
  },
};
// console.log(cars2.getcars());
// ========================================
const self = this;
const cars3 = {
  company: ["marcedes", "farari", "mghector"],
  category: "fourwheeler",
  getcars() {
    const res = this.company.map(function (item) {
      return `${item} - ${self.category}`;
    }, this);
    return res;
  },
};
console.log(cars3.getcars());
