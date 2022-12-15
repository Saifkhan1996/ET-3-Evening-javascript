// ======== counter by vanilla js

// let counter=0;

// const countvalue= document.getElementById("value");
// const increasebtn= document.querySelector(".Increase");
// const decreasebtn= document.querySelector(".Decrease");
// const resetbtn= document.querySelector(".Reset");

// increasebtn.addEventListener("click",function(){
//     counter++;
//     countvalue.innerHTML=counter;
//     console.log(counter)
// })
// decreasebtn.addEventListener("click",function(){
//     counter--;
//     countvalue.innerHTML=counter;
// })
// resetbtn.addEventListener("click",function(){
// counter=0;
// countvalue.innerHTML=0;
// })
// ============ counter by advanced js=============

counter=0;

const countvalue=document.getElementById("value");
const counterbtns=document.querySelectorAll(".btn");

counterbtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        // ============= USING SYNTHETIC event===========
        // Synthectic event recieve a paramemter in addeventlistner's function i:e function(e)
        const listofclasses= e.target.classList;
        if(listofclasses.contains("Increase")){
                counter++;
            } else if(listofclasses.contains("Decrease")){
                counter--;
            } else{
                counter=0;
            }
            countvalue.innerHTML=counter;
        // ================using classList=====================
        // const listofclasses= btn.classList;
        // if(listofclasses.contains("Increase")){
        //     counter++;
        // } else if(listofclasses.contains("Decrease")){
        //     counter--;
        // } else{
        //     counter=0;
        // }
        // countvalue.innerHTML=counter;
        // console.log(listofclasses);
        // ============using innerhtml==============
        // if(btn.innerHTML==="Increase"){
        // counter++;
        // } else if(btn.innerHTML==="Decrease"){
        //     counter--;
        // } else{
        //     counter=0;
        // }
        // countvalue.innerHTML=counter;
    })
})


