// How to exract values from an array
const newArray = [1, 2, 3, 4, 5];
// by using index number
// console.log(newArray[4]);
//BY Destructuring
const [val1, val2] = newArray;
// console.log(val1,val2);

// Bracket Notation;
const shabaz = newArray[0];
// console.log(shabaz);
// ======================= practice ===============================
const arr = [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"];
// console.log(arr[7]);
const [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10] = arr;
console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
const saif = arr[4];
console.log(saif);
