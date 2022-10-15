//Importamos la clase del archivo task.js
//import { Task } from "./task.js";


const inputTask = document.querySelector(".input__task");
const btnCreate = document.querySelector(".btn__create");
const listTask = document.querySelector(".container_lists_task");


let  arrayTasks = [];

//NOTA!!--Cuando una fucnion no tiene nombre se 
//llama funcion anonima
btnCreate.onclick = function (){
    //guardamos el valor del input en una variable
    const taskText = inputTask.value;
    
    //Vamos a validar que el tasktext no este vacio
    if(taskText ===""){
        alert("Debes completar la caja de texto");
        return
    }
    
    const task1 = new Task(arrayTasks.length+1, taskText, new Date(), 1);
    arrayTasks.push(task1)
    

    listTask.innerHTML += task1.pintar();
    //Limpiamos el input
    inputTask.value = "";
};

inputTask.addEventListener("keyup", (event)=>{
    if(event.key === "Enter"){
        btnCreate.click();
    }
})

function destroy(id) {
    // como podemos eliminar un elemento de un array
    // En la condicion podemos decir que traiga todos los elemenots menos el que tenga
    // el id que estamos recibiendo
    //? Que retorna filter? = Array
    const filterTask = arrayTasks.filter((task) => task._id !== Number(id));
    // Acá estamos diciendo que el valor. de arrayTask. es ahora filterTask
    arrayTasks = filterTask;
    Task.destroyRender(id);
}
/*
  function edit(id){
    const newText = prompt("Ingresa el nuevo nombre de la tarea");
    // find solo retorna 1 elemento
    const oneTask = arrayTasks.find((task) => task._id === id )

    if(oneTask ===undefined) return
    

    oneTask._name = newText;
    oneTask._status = 2;
    
    Task.updateRender(id, newText);
  }*/

  function edit(id) {
    const element = document.querySelector(`#task-name-${id}`);
    element.style.display = "none";
    // Para poder crear un elemento de type node tenemos que usar la
    // funcion createElement
    const container = document.createElement("div"); // <div></div>
    container.style.display = "flex";
    container.style.gap = "5px";

    const input = document.createElement("input"); // <input type="text" placeholder="Ingresa el nuevo nombre" />
    input.type = "text";
    input.placeholder = "Ingresa el nuevo nombre";

    const button = document.createElement("button"); // <button>Save</button>
    button.textContent = "Save"
    button.style.backgroundColor = "#ccc";
    button.onclick = function(){
        if(input.value === ""){
            alert("Debe ingresar una tarea");
            return;
        }
        //update a nivel de array
        const oneTask =arrayTasks.find((task)=>task._id===id)
        oneTask._name = input.value;

        //update a nivel visual
        element.textContent = input.value;
        element.style.display = "block";
        container.remove();
    }

    const buttonCancel = document.createElement("button"); // <button>Cancel</button>
    buttonCancel.textContent = "Cancel"
    buttonCancel.style.backgroundColor = "#ccc";
    buttonCancel.onclick = function(){
        container.remove();
        element.style.display = "block";
    }

    container.appendChild(input); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" /> </div>
    container.appendChild(button); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" />  <button>Save</button> </div>
    container.appendChild(buttonCancel); // <div> <input type="text" placeholder="Ingresa el nuevo nombre" />  <button>Save</button> <button>Cancel</button> </div>

    // Recordemos que element es el h6 y queremos poner el container al costado
    // parentNode.insertBefore = coloca el containe antes del h6
    // element.nextSibling = cambien la posición a despues del h6
    element.parentNode.insertBefore(container, element.nextSibling);
}

function check(id){
    const checking=document.querySelector(`#check-${id}`).checked;
    const btnEdit=document.querySelector(`#btn-edit-${id}`);
    const btnDelete=document.querySelector(`#btn-delete-${id}`);
   // checking.checked = function(){
   //     btnEdit.style.display ="none";
   //     btnDelete.style.display ="none";
   // }
    alert(checking)
   
}