//extends indica heredar las propiedades de htmlelemtn
//Htmlelement es una instancia de una clase ya creado, por ejemplo el objeto window
//cuando jalamos un document.queryselector, estamos instanciando un htmlelement
/*
Los objetos HTMLElement tienen varias propiedades:
- una de ella es innerHTML
- otra es innerText
- otra es classList
*/
class Card extends HTMLElement {
    constructor(){
        super();//instancia a su padre HTMLElement.
        this.class = "card p-3 bg-primary";
        this.classname = "";
    }
    static get observedAttributes (){
        return ["class", "classname","shadow"];
    }
    //
    attributeChangedCallback(name, oldvalue, newvalue ){
        this[name] = newvalue;
        if(name == "shadow"){
            this.classList.remove("shadow");
            if(newvalue == "true") this.classList.add("shadow");
            
        }
    }

    connectedCallback(){
        if(this.class){
            const classLista = this.class.split(" ");
            classLista.forEach((xclass)=>{
                this.classLista.add(xclass);
            })
        }
        if(this.classname){
            const classLista = this.classname.split(" ");
            classLista.forEach((xclass)=>{
                this.classLista.add(xclass);
            })
        }
    }
}
customElements.define("my-card",Card);