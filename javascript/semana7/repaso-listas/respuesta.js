class Tarea{
    constructor (id,nombre){
        this.id=id;
        this.nombre=nombre;
    }

    destruirTarea(id){
        const element = document.querySelector('# task-${id}')
    }



    crearTarea(){
        
      return  `
        <div id="task-${this.id}" class="container__respuesta__tarea">
            <input type="checkbox">
            <h4>${this.nombre}</h4>
            <button>
                <img src="./image/edit.png" width="20px" alt="">
            </button>
            <button onclick="destruir(${this.id})">
                <img src="./image/delete.png" width="20px" alt="">
            </button>
        
            </div>
        `
    }
}





