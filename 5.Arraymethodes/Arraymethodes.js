var arr1 = [1, 2, 3, 4];
// var arrcopy=[1,2,3,4,5];
var arr2 = ["a", "b", "c"];
// var resultpush=arr1.push(5);
// console.log(arr1);
// push:-add new element after last index
// var resultpop=arr1.pop();
// console.log(resultpop);
// pop:-remove last element from an array
// var resultshift=arr1.shift();
// console.log(resultpop);
// shift:- it removes first element from an array
// unshift:- it adds first element to an array
// var resultpush=arr1.unshift();
// var resultconcat=arr1.concat(arr2);
// add two array and return new array
// console.log(resultconcat[5]);
// if given value exist it will reurn true value otherwise false
// var resultincludes=arr1.includes("a");
// var resultincludes=arr1.includes("1");
// join method returns a new string by concatening all of the array
// var result = arr1.join(" ");
// var result = arr2.join(" ");
// console.log(result);
// console.log(result);
// var result = arr1.indexOf(2);
// console.log(result);
// var result=arr1.fill("a");
// console.log(result);
// var result=arr2.fill("a");
// var result=arr1.slice(0,4);
// console.log(result);
// var result=arrcopy.splice(0,2,80);
// console.log(arrcopy);
// var result=arr1.reverse();
// console.log(result);
// var str="Hi i am saif ";
// console.log(str.length);

// HIGHER OREDER METHOD
// var arr3=[7,8,9,10,1,2,3,4,5,6,];
var arr3 = [1, 2, 3, 4, 9, 8, 7, 6, 5];
var mappedArray = arr3.map(function (elements, index) {
  // console.log(elements, index);
  // return elements + 2;
});
// console.log(mappedArray);
// FOREACH
arr3.forEach(function (item, index, array) {
  // console.log(item, index, array)
});
var filteredarray = arr3.filter(function (myfiltered) {
  // console.log(myfiltered);
  return myfiltered >= 10;
});
// console.log(filteredarray);
// console.log(arr3);
// EVERY ELEMENT= this met hod checks every element that passes the condition iside the prvided function
var everyresult = arr3.every(function (elem) {
  // return elem > 0;
  return elem > 2;
});
// console.log(everyresult);
// SOME METHODE
var somed = arr3.some(function (curritem) {
  return curritem > 17;
});
// console.log(somed);
// REDUCE METHOD
var reduced = arr3.reduce(function (total, current) {
  return total + current;
});
// console.log(reduced);
// SORT OR ARRANGE METHOD
var acending = arr3.sort(function (a, b) {
  // accending order
  return a - b;
});
// console.log(acending);
var decending = arr3.sort(function (a, b) {
  // decending order
  return b - a;
});
// console.log(decending);
