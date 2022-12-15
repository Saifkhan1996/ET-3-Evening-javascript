//  =============== ECMA IFELSESTATEMENT OR TERNARY OPERATOR ================
//  const time= 5;
//  time >6 ? console.log("if executed"):console.log("else executaged")
//  const age=17; 
// age>=18?console.log("eligible"):console.log("not eligible")
// let num=11;
// num<=10?console.log("integer"):console.log("float")
// var res= 34;
// res>=35?console.log("pass"):console.log("fail");
// ============= TEMPLETE LITERALS =============
// use backticks to avoid concatenation
const time=5;
const timetwo=10;
// console.log(`timeone: ${time} timetwo: ${timetwo}`)
// ===========rest operator===============
// rest operaor must be in last amoung all parameters and it is followed by tripple dot "..." and gives output in forms of an array
const getTotal=(numOne,numTwo,...rest) => {
    return rest.reduce((acc,curr)=> acc + curr);
}
// console.log(getTotal(10,20,304,095,096,08,4335,3456))

// =========== SPREAD OPERATOR ==================
// it takes all elements of an array and add new element in existing array and return new array it is followed by tripple dot "..."
// const nums=["10",20,304,095,096,08,]
const nums=[1,2,3,4]
const letters=["a","b","c","d"]
// const numone= [...nums,2000];
const numtwo= [...nums,10,20,...letters];
// console.log(numone);
// console.log(numtwo);
const personfname={fname:"jhon"};
const personlname={lname:"wick"};
const persondata={...personfname,...personlname};
const persondata2={...personfname,...personlname,phone:9876543210,fname:"saif khan"};
// console.log(persondata2)
// ========== practice ============
let shopname=["spacex","fb","reliance"]
const letters1=["S","F","R"]
var combi=[...shopname,...letters1,"elon","mark","ambani"]
// console.log(combi);
// =========================
const obj={name:"saif",age:26}
const add={add:"nanded",contact:8862042948}
const data={...obj,...add,email:"saifkhan.a28@gmail.com",old:27}
// console.log(data);
// ================ Default parameter ======================
// if any parameter doesnot get argument like rate=0.1 it will consider defualt value if argument is passed it will consider argument value
function calculalteintrest(principle,years,rate=0.1){
    rate= rate || 0.1;
    const months=12;
    const intrest=(principle/months)*rate*(years*months);
    return intrest;
}
console.log(calculalteintrest(20000,2));
