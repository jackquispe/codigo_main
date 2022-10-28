//Es una clase especial porque va a extender HTMLElement
//HTMLElement es una clase nativa de JS

class Card extends HTMLElement{
    //como esta clase tiene un extends necesitamos de un super
    constructor(){
        //usando super() dentro del constructor vamos a poder crear atributos propios 
        super();
        this.title = "";
        this.img = "";
        this.message = "";
    }

    //para poder recibir parametros desde HTML necesitamos 2 funciones
    static get observedAttributes(){
        //En esta funcion vqamos a definir que parametros acepta nuestro componente
        //para poder saber quienes son
        //vamos a definirlos dentro de un array
        return["title", "message", "img"];
    }
    //como podemos guardar el valor que recibimos
    attributeChangedCallback(name, oldvalue, newvalue){
    //* name => no,bre del atributo
    //* oldvalue => es el valor qactual
    //* newvalue => es el nuevo valor que estamos recibiendo
        switch (name) {
            case "title":
                this.title = newvalue;
                break;
            case "img":
                this.img = newvalue;
                break;
            case "message":
                this.message = newvalue;
                break;
            default:
                break;
        }

    }
    //para poder asignar html dentro de mi tag
    //debemos llamar a la funcion connecedCallback()

    //esta funcion se ejecuta de forma automatica
    //cuando nuestro componente se crea en html
    connectedCallback(){
        this.classList.add("col-12","col-sm-4","col-md-3");
        this.innerHTML = 
        `
        <div class="card mt-5">
        <img width="100%"  class="card-img-top" src= "${this.img}"/>
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.message}</p>
                <button class="btn btn-link">Leer mas</button>
             
            </div>
        </div>
        `;
    }
}

customElements.define("my-card", Card);