 let counter=0;
const countvalue=document.getElementById("value");
const countincrease=document.querySelector(".increase")
const countdecrease=document.querySelector(".decrease")
const countreset=document.querySelector(".reset")

countincrease.addEventListener("click",function(){
    counter++;
    countvalue.innerHTML=counter;
    
    // console.log(counter)
})
countdecrease.addEventListener("click",function(){
    counter--;
    countvalue.innerHTML=counter;
    // console.log(counter)
})
countreset.addEventListener("click",function(){
    counter=0;
    countvalue.innerHTML=0;
    // console.log(counter)
})