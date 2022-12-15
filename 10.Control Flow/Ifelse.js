const time=13;
if(time >=6 && time <12){
console.log("good morning");
} else if(time ==12){
    console.log("good noon")
} else if(time >12 && time < 18){
    // console.log("good Afternoon")
} else if(time >18 && time <=20){
    console.log("good evening")
} else{
    console.log("good night")
}
// const role="Admin"
// if (role=="Admin"){
// console.log("hello Admin")
// }  else if(role=="owner") {
//     console.log("hello owner")
// } else if(role=="guest"){
//     console.log("hello guest")
// } else{
//     console.log("you donot belong o this,get hell out!")
// } 

// SWITCH CASE
// break keyword is imporant 
// const role="admin";
// switch(role){
//     case"admin":
//     console.log("hello Admin");
//     break;
//     case "owner":
//         console.log("hello owner");
//         break;
//         case "guest":
//         console.log("hello guest");
//         break;
//         default:
//             console.log("you donot belong o this,get hell out!");
// }
// FOR LOOP
// for(let i=0; i<=10; i++){
//     console.log(i);
// }
// reverse for loop
// for(let i=10; i>0; i--){
//     console.log(i);
// }
const arr=["a","b","c","d","e","f","g"];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

