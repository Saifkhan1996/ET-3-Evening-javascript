// =========== DO WHILE LOOP ============
// sum=0
// do {
//     console.log(sum);
//     sum++;
// } while(sum < 10)
// =========== FOR IN ==================
// it doesnot support dot notation (.) it supports bracket notations
// keys of obj are assigning to variable a
const obj= {valueone:10,valuetwo:20,valuethree:30,}
for(let a in obj){
    // console.log(obj[a]);
    obj[a]= obj[a]/2;
}
// console.log(obj)
// ============= FOR OF ============
const arr=[1,2,3,4,5,6,7,8];
for(let b of arr){
    console.log(b);
}
 