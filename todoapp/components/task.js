class Task extends HTMLElement {

    constructor(){
        super();
        this.text =_text;
        this.status = "created";
        this.created_at = new Date();
    }

    static get observedAttributes(){
        return ["text", "status"];
    }
    attributeChangedCallback(prop, oldavalue, newvalue){
        this[prop] = newvalue;
    }

    connectedCallback(){
        
    }
}