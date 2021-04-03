let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');



addToDoButton.addEventListener('click',function()
{
    // alert(inputField.value == Number)
    if(inputField.value == false){
        alert("Invalid value");
    }
    
    else{
        var paragraph = document.createElement("p")
        paragraph.classList.add('paragraph')
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
        paragraph.addEventListener('click',function(){
            paragraph.style.textDecoration = 'line-through'
        })
        paragraph.addEventListener('dblclick',function(){
            toDoContainer.removeChild(paragraph);
        })
    }
  
})