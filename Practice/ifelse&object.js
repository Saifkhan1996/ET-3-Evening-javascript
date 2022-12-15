var a={name:"jhon",age:20,add:"america"}
// console.log(a.name);
// console.log(a["age"]);
a["country"]="india";
a["name"]="saif khan";
a.age=25
a.add="pune";
a.contact=9876543210;
// console.log(a);
var arr=[1,2,3,4,5];
// console.log(arr[1]);
var [v1,v2]=arr;
// console.log(v1,v2);
var c=arr[0];
// console.log(c)
// console.log(a["name"]);
// console.log(a["age"]);
// console.log(a["add"]);
// console.log(a.name);
// console.log(a.age);
// console.log(a.add);
a["song"]="SHARABI"
a.artist="atif aslam";
// console.log(a);
// IF ELSE 
// const percentage=60;
// if(percentage >= 95 && percentage <=100){
// console.log("OUTSTANDING")
// } else if(percentage >=70 && percentage <95 ){
//     console.log("FIRST CLASS")
// } else if (percentage <70 && percentage >=60){
//     console.log("SECOND CLASS")
// } else if(percentage <60 && percentage >= 35){
//     console.log("THIRD CLASS")
// } else {
//     console.log("FAIL")
// }
// SWITCH CASE
// const type= "brittle";
// switch(type){
//     case "brittle":
//     console.log("i am brittle")
//     break;
//     case "hard":
//         console.log("i am hard")
//         break;
//     case "soft":
//         console.log("i am soft")
//         break;
//     case "ductile":
//         console.log("i am ductile");
//         default:
//             console.log("Material type doesnot match finsd it some elsewhere");
// }
// FOR LOOP
// for(i=10;i>=1;i--){
// console.log("2 ", i,"=" + 2*i);
// } 
// for(i=1;i<=10;i++){
// console.log("2 ", i,"=" + 2*i);
// } 
// IF ELSE
var hasDL=false;
const age=18;
if(age>=18){
    hasDL=true;
}
if(hasDL){
    // console.log("you can drive a car")
} else{
    // console.log("focus on study")
}
// ====================
var week="sunday";
if(week==="sunday"){
    console.log("if else statement");
} else if(week==="monday"){
    console.log("for loop");
} else if(week==="tuesday"){
    console.log("let const var");
} else if(week==="wednessday"){
    console.log("functions");
} else if(week==="saturday"){
    console.log("Advanced js");
}
 else{
    console.log("enjoying weekend");
}
// ================== switch case =========================
var getDay=new Date().getDay()
console.log(getDay);
