function getsquarearea(side) {
  (this.side = side),
    (this.getarea = function () {
      return this.side * this.side;
    });
  //   return this;
}
const square = new getsquarearea(100);
console.log(square.getarea());
