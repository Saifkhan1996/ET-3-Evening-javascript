// ===== Constructor function ==========
function GetCircleArea(radius) {
  this.pi = 3.14;
  this.radius = radius;
  this.getArea = function () {
    return this.pi * this.radius * this.radius;
  };
  return this;
}

// console.log(new String("jhon"));
// "new" keyword create a new instance
// we have to take "new" keyword
const firstcilrcle = new GetCircleArea(5);
// console.log(firstcilrcle.getArea());
// =======area of triangle==========
function GetTriangleArea(h, b) {
  this.h = h;
  this.b = b;
  this.getArea = function () {
    return (this.h * this.b) / 2;
  };
  return this;
}
const areaoftriangle = new GetTriangleArea(10, 25);
console.log(areaoftriangle.getArea());
