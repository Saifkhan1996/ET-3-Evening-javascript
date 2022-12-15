const inputBox=document.getElementById("inpt")
// console.log(inputBox)
const addBtn=document.getElementById("btn")
// console.log(addbtn)
const showDiv=document.getElementById("displaylist")
// console.log(showDiv)

addBtn.addEventListener("click",function (){
    const newTask= document.createElement("p");
    newTask.innerHTML = inputBox.value;
    // showDiv.appendChild(newTask);
    // it takes a string value also with tag or withot tag
    showDiv.append(newTask,);
    inputBox.value=""
    // console.log(newTask);
    newTask.addEventListener("click", function(){
        newTask.style.textDecoration = "line-through";
        newTask.style.textDecorationColor = "green";
    })
    newTask.addEventListener("dblclick", function(){
        // showDiv.removeChild(newTask); 
        // it deletes all tags 
        showDiv.remove(newTask);
    })
});
