// const idselection=document.getElementById("Ptag");
// console.log(sample);
// const classSelection= document.getElementsByClassName("Spantag")

// console.log(classSelection);
// console.log(classSelection[0]);
 
// element with an Id
// const querySlection= document.querySelector("#Ptag")
// console.log(querySlection);
// elements with Class
// const querySlection= document.querySelector(".Spantag")
// console.log(querySlection);

// const queryAllSlection= document.querySelectorAll("#Ptag")
// console.log(queryAllSlection);
// console.log(queryAllSlection[0]);

// const queryAllSlection= document.querySelectorAll(".Spantag")
// console.log(queryAllSlection);
// console.log(queryAllSlection[0]);

// TAG selection
// const tagSelection= document.getElementsByTagName("p");
// const tagSelection= document.getElementsByTagName("span");
// console.log(tagSelection);

// To read and over write the html element
// const selectedptag= document.getElementById("Ptag")
// to override value of inner html
// selectedptag.innerHTML= "value has been overriden"
// function changetext(){
//   return  selectedptag.innerHTML= "value has been overriden"
// }
// console.log(selectedptag.innerHTML); 


const selectedptag= document.getElementById("Ptag")
const btn= document.getElementById("changebtn")
btn.addEventListener("click", function(){
    // with the help of "innerHTML" we can write html coding in js
    // selectedptag.innerHTML= "<i>value has been overriden</i>"
    // selectedptag.innerText= "value has been overriden"
    selectedptag.textContent= "value has been overriden"
});