var string = "welcome to the javascript guide";
const str = string.split("").reverse("").join("");
// console.log(str);

var words = ["the", "quick", "brown", "fox"];
var str1 = words.map((item) => item.length);
// console.log(str1);
var arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [1, 2, 3]]]];

var arr1 = arr.flat(Infinity);
// console.log(arr1);

const str2 = ["laptop", "keyboard", "mouse", "charger"];
const arr3 = [500000, 1200, 800, 1800];
const obj = {};
str2.forEach((item, index) => (obj[item] = arr3[index]));
// console.log(obj);
// ========================================
const obj1 = { name: "test", age: 20 };
// var age = 20;
delete obj1.age;
// console.log(obj1);
const changename = { ...obj1, name: "tested" };
// console.log(changename);
// ===================================
let newArray = [3, 1, 2, 6, 4, 7, 5, 9];
const mapped = newArray.map((item) => {
  return item * 2;
});
// console.log(mapped);
// ========================================
const odd = newArray.map((item) => {
  if (item % 2 === 1) {
    // console.log(item);
  }
});
// =======================================
let arr2 = [
  { name: "jhon", age: 35 },
  { name: "mike", age: 20 },
  { name: "jack", age: 45 },
  { name: "smith", age: 32 },
];
const output = arr2.sort((acc, curr) => {
  acc.age > curr.age ? 1 : -1;
  console.log(output[0], output[output.length - 1]);
});
