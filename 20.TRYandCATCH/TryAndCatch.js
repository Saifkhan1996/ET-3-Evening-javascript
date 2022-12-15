// ========== TRY AND CATCH ====================
// press ctrl + f to find anything in coding
// const num = 10;
// try {
//   if (num === "") throw "please provide a value";
//   if (isNaN(num)) throw "please provide a alid number";
//   if (num < 50) throw "number is less than50";
//   if (num > 100) throw "number is greater than 100";
// } catch (e) {
// console.log(e);
// } finally {
//   console.log("Thank you for visiting");
// }
// =================================================
// const number = document.getElementById("inpt");
// const testbutton = document.getElementById("testbtn");
// testbutton.addEventListener("click", function () {
//   try {
//     if (number.value === "") throw "please provide a value";
//     if (isNaN(number.value)) throw "please provide a alid number";
//     if (number.value < 50) throw "number is less than50";
//     if (number.value > 100) throw "number is greater than 100";
//     window.alert(success);
//   } catch (e) {
//     window.alert(e);
//   } finally {
//     window.alert(e);
//   }
// });
// ========================================
// var saif = 10;
// try {
//   if (str === "") throw "Empty";
//   if (str >= 50) throw "fifty or more than it ";
// } catch (e) {
//   window.alert(e);
// } finally {
//   window.alert("thank you for visiting");
// }
// ============================================
// const val = 100;s

const button = document.getElementById("testedbtn");
const saif = document.getElementById("inpt1");

button.addEventListener("click", function () {
  try {
    if (saif.value == "") throw "Enter value";
    if (saif.value < 50) throw "less than 50 ";
    if (saif.value == 100) throw " 100 ";
    if (saif.value > 100) throw "greater than than 100 ";
    window.alert(jdjrj);
  } catch (e) {
    window.alert(e);
  } finally {
    window.alert(e);
  }
});
