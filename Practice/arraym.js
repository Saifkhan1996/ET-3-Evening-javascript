// MAP Array method
var a=[1,2,3,4,5,6,7];
var mappedarray=a.map(function(element,index,array){
    // console.log(element,index,array);
  return  element + 5;
});
// console.log(mappedarray);
// FOREACH Array method
var foreached=a.forEach(function(shoaib){
// console.log(shoaib);
});
console.log(foreached);
// FILTER METHOD
var filtered=a.filter(function(myfilter){
return myfilter<=5;
});
// console.log(filtered);
// EVERY METHOD
var everyresult=a.every(function(item){
return item > 0;
});
// console.log(everyresult)
// SOME METHOD
var somed=a.some(function(item1){
return item1 < 3;
});
// console.log(somed);
// REDUCED METHOD
var arr=[1,2,5,7,9,3,15,20,12,10]
var reduced=a.reduce(function(total,current){
    return total + current;
});
// console.log(reduced);
// SORT METHOD
var sorted=arr.sort(function(a,b){
    return a > b?1:-1
    return a > b?-1:1
});
// console.log(sorted);
