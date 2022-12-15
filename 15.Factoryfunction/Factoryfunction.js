// ==========Factory function===============
// A function which returns an object is called factory function
//  =============AREA OF CIRCLE============
// function getCircleArea(radius){
//     return {
//        pi: 3.14,
// radius: radius,
// =====OR========
//         radius,
//         getarea:function(){
//             return this.pi*radius*radius
//         }
//     }
// }
// const circlefirst=getCircleArea(10)
// const circlesecond=getCircleArea(5)
// console.log(circlefirst)
// console.log(circlesecond.getarea())
// ===============AREA OF TRIANGLE============
// function getTriangleArea(a,b){
//     return {
//         a: a,
//         b: b,
//         getArea:function(){
//             return this.a*b/2;
//         }
//     }

// }
// const trianglearea=getTriangleArea(10,10)
// console.log(trianglearea)
// const tringlearea=getArea(5,10);
// console.log(trianglearea.getArea())
// =======================================================

function personDetail(fname, lname, email, phone) {
  return {
    fname,
    lname,
    email,
    phone,
    getfullname() {
      return this.fname + " " + this.lname;
    },
    getcontact() {
      return this.phone + " " + this.email;
    },
  };
}
const details = personDetail("saif", "khan", "saifgmail.com", 9876543210);

console.log(details.getfullname());
console.log(details.getcontact());
