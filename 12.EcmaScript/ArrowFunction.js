// ============ ARROW FUNCTION=============
// const getName=(lname)=>{
//     return lname;
// }
// console.log(getName("khan"))
// const arr=[1,2,3,4,5,6,7,8];
// const mapped=arr.map((item)=>{
// return item + "a";

// })
// console.log(mapped);
const cal=(p,r,y)=>{
    let n=1;
  const intrestamt= (p/n)*r*(n*y);
  const payableamt= p + intrestamt
  const emi= payableamt/(n*y);
  return  ("payable amt: " + payableamt + " " + "intrestamt: " +  intrestamt+ " " +"EMI" + " " + emi.toFixed(2));
}
console.log(cal(20000,0.1,3));
