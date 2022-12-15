// ============= CLOSURE ==============
// LEXICAL SCOPE :- if we take nesting of functions all child function can access variable declared in parent function but parent function cant not access variable declared in child fucntions 
// function parentFunction() {
//     const age = 40;
//     function childfunction() {
//         console.log(age);
//     }
//     return childfunction();
// }
// parentFunction();  
const arr=[1,2,3,4,5,6,7]
var mapped=arr.map((a)=>{
   return a + 2;
})
// console.log(mapped)
// console.log(arr)
 arr.forEach((a)=>{
    // console.log(a)
})
var filteredarray=arr.filter((f)=>{
    return  f > 4;
})
// console.log(filteredarray)
const somed=arr.some((item)=>{
    return item <1 
})
// console.log(somed);
var everyarray=arr.every((element)=>{
    return element >=1;
})
// console.log(everyarray);
var reduced=arr.reduce((acc,curr)=>{
    return acc + curr
})
// console.log(reduced)
var sorted=arr.sort((s,k)=>{
    return s < k ? 1:-1
})
// console.log(sorted)
const time =5 ;
const timetwo=20
// time >6 ? console.log("good morning") : console.log("noon")
console.log(`${time} am o'clock , ${timetwo} pm o'clock `)

