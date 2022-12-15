// find element
// const a=["a",123,"b","c",123];
// console.log(shapes.find(function(abc)
// {
// return abc===123
// }));
// const fnd=[1,2,3,"a","b","c"];
// console.log(fnd.find(function(xyz)
// {
// return xyz==="c"
// })
// );
// find index
// console.log(a.findIndex(function(xyz){
//     return xyz===123; 
// }));
// some method
// console.log(a.some(function(anything){
// return anything<0;
// return anything>2;
// }))
// every mehod
// const b=[1,2,3,4,5,6,7,8,9];
// console.log(b.every(function(anything)
// {
// return anything===123;
// return anything <=9;
// }));
// filter method
// const products=["apple","Apple","adiddas","woodland","samsung","puma","nike","adiddas","oneplus","apple","samsung","nike","apple"]
// console.log(products.filter(function(item)
// {
// return item==="apple";
// return item==="nike";
// }));
// map method
// console.log(products.map(function(item1){
//     return item1.slice(0,3) + ".." + item1.slice(-4,-1);
// }))
// console.log(products.forEach(function(item1){
//     return console.log(item1.slice(0,3) + ".." + item1.slice(-4,-1));
// }))
// reduce methode
// const a=[1,2,3,4,5,6,7,8,9,10];
// console.log(a.reduce(function(acc,curr){
    // acc is not countable in this operation
    //  return acc + curr*2; 
// },0))
// sort method
console.log(products.sort(function(a,b){
// return a>b?1:-1;
return a.toLowerCase()>b.toLowerCase()?-1:1;
}))

