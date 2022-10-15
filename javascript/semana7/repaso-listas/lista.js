const inputTarea =document.querySelector(".input__tarea");
const btnCrearTarea=document.querySelector(".btn__crear__tarea");
const containerREspuesta =document.querySelector(".container__respuesta")

let arrayListas = [];

btnCrearTarea.onclick = function(){
    const respuesta=inputTarea.value;
    
    if(respuesta === ""){
        return alert("Ingresa una tarea");
    }

    const tarea1=new Tarea(arrayListas.length + 1, respuesta);
    arrayListas.push(tarea1);
    

    containerREspuesta.innerHTML += tarea1.crearTarea();
    inputTarea.value = "";
}

function destruir(id){
    const datosFiltrados = arrayListas.filter((tarea1)=>Number(tarea1.id) !== Number(id));
    arrayListas = datosFiltrados;
}

