
// console.log(arr.push());
// console.log(arr.push(6));
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.unshift(10));
// console.log(arr)
// var arr2=["a","b","C"];
// var resconcat=arr2.concat(arr);
// console.log(resconcat);
// var resinclud=arr2.includes("d");
// console.log(resinclud);
// var resjoin=arr.join("$");
// console.log(resjoin);
// var resindex=arr.indexOf(1);
// console.log(resindex);
// var resfilled=arr.fill("3");
// console.log(resfilled);
// var resrev=arr.reverse();
// console.log(resrev);
// higher order method
// map method
var arr=[1,2,3,4,5,6,7];
var arr5=[110,41,43,2,3,4,5,6,7];
// console.log(arr.map(function(item){
// return item * 5;
// })
// );
// foreach mehod
// console.log(arr);
// console.log(arr.forEach(function(item1){
//     console.log(item1);
// }));
// filter method
// var arr3=["html","java","css","react","python","c++","java","html","java","css","c++"];
// console.log(arr3.filter(function(item){
//     return item === "java";
// }));
// console.log(arr.some(function(item){
//         return item <=1;
//     }));
// console.log(arr.every(function(item){
//         return item <=7;
//     }));
    
// console.log(arr.reduce(function(acc,cur){
//     return acc + cur*2;
//     },1));
// console.log(arr.sort(function(a,b){
//     return a>b?1:-1
//     }));
// console.log(arr.sort(function(a,b){
//     return a>b?-1:1
//     }));
function saif(a ,b){
    return a +"="+ b;
}
// console.log(saif("name","age"));
var exp=function(c,d){
    return c<d;
}
// console.log(exp(20,30));
function rest(a,b,c,...rest){
// console.log(a,b,c,rest);
}
rest(1,2,3,4,5,6,"q","d","s");
function advanced(e,d){
// console.log(e,d);
}
advanced([1,2,3],{name:"saif",age:"26",add:"nai abadi"});
// extract array method
const newArray = [100,200,300,400,500,600,700];
// console.log(newArray[4]);
const [v1,v2]=newArray;
// console.log(v1,v2);
var a=newArray[6];
// console.log(a);
// extract object methd
const obj={name:"shoaib",age:5,height:3.4,add:"nai abadi"};
// By dot notation
const n=obj.name;
// console.log(n);
const o=obj.age;
const p=obj.add;
// console.log(o);
// console.log(p);
// By destructuring
const {name,age,add,height}=obj;
// console.log(name,age,add,height);
// console.log(obj);
// FUNCTION DECLARETION
function wedding(ab,cd){
    return (ab + cd) * 2 / 2;
}
// console.log(wedding(50,30));
// FUNCTION EXPRESSIOn
var exp=function(item,item1){
    return item * item1 + item*2;
};
// console.log(exp(6,8));
// rest function
function rest(v1,...rest){
// return console.log(v1,rest)
}
rest(1,2,3,4,5,6,7,8)
// ADVANCED FUNCTON
function adv(val1, val2){
return console.log(val1,val2)
}
adv([1,2,3],{name:"cs",age:23,add:"NAI ABADI"})