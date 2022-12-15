//  console.log("testing");
//  Function declaretion
// function name always starts with "_","$", "Alphabet"
function declaretion(){
// return console.log("HEllo i am first function");
}
// declaretion(); 
// function expression
var expression =function () {
    // return console.log("HEllo i am second function");
};
// expression();
// Functions with Arguments
function first(val,val2){
    return val + val2;
};
// first("Saif");
// console.log(first(20,30));
// Rest parameter  tripple dot(.)is compulsory and rest parameter must be last in parameter list
function rest(val,...rest){
console.log( val,rest);
}
rest(1,2,3,4,5,6,7,8,9,10);
// Advance function argument
function advance(val3,val4){
// console.log(val3,val4);
}
// advance([1,2,3],{name:"Saif",age:26,add: "Naiabadi"});