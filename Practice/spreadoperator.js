const arr= [1,2,3,4,5];
const arr2 = ["a",'b',"c","d","e"]
const combinedarray= [...arr2,"f",...arr,6];
// console.log(combinedarray);
// ==============spread operator for objects objects===============
const obj={height:200,width:200,length:200}
const obj2= {name:"saif",contact:9876543210,email:"saif@gmail.com"}
// const resobj= {...obj,...obj2}
const res1={...obj,long:200, width:400}
const res2={...obj2,add:"nanded",name:"Munwar",email:"munwar@gmail.com"}

// console.log(res2)
// ===============rest============
function getfullname(fname,lname,...rest){
    return lname + fname +rest
}
const name=getfullname("saif","khan", "hafizullahkhan","manjlekhan");
console.log(name)
// ================this  methode================
// const person={fname:"jhon",lname:"wick"}
// function fullname(){
// return this.fname + " " + this.lname;
// }
// console.log(fullname)

