const todoinpt=document.getElementById("inpt");
const addbtn=document.getElementById("btn");
const showlist=document.getElementById("showtodos");
let count=0;
function addtask(){
    showlist.innerHTML= todoinpt.value;
    todoinpt.value="";
    count++;
}