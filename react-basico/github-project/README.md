# ReactJS

Es una biblioteca de JavaScript para construir interfaces de usuario.

## Como crear un proyecto en React

Para crear un proyecto de ReactJS, se debe ejecutar el siguiente codigo
```bash
npx create-react-app Nombre_del_proyecto

```
```bash
cd nombre_Del_proyecto
```
```bash
npm start
```

## Reglas

- Todo componente debe ser una función.
- Todo compomente debe empezar con *mayuscula*.
```js
function MyCard() {
  return <div>My Card</div>
}
```
## Usando Arrow function
```js
const MyCard = () => {
  return <div>My Card</div>
}
```

- Todo componente debe retornar un solo elemento padre.
```js
function MyCard() {
  return (
    <div>
      <h1>Titulo</h1>
      <p>Parrafo</p>
      <div>
        <p>Parrafo hijo</p>
        <div>
          <p>Parrafo hijo 2</p>
        </div>
      </div>
    </div>
  );
}
```
- Nota: Dentro de mi componente puede mas funciones y esas ya no llevan mayuscula.
- Eventos: Los nombre de los eventos en React son camelCase.
  - onclick -> onClick
  - onchange -> onChange
  - onsubmit -> onSubmit
```js
function MyCard() {

  function mostrarMensaje() {
    console.log('Hola mundo');
  }

  return (
    <div>
      <h1>Titulo</h1>
      <button onClick={mostrarMensaje}>Mostrar mensaje</button>
    </div>
  );
}
```

## useState

En react para poder almacenar un valor en un variable usamos un hook llamando useState useState es una funcion de react la cual nos permite poder manejar el estado de una variable

* Como se usa useState
* Siempre los import de react van en la primera linea
```js
import { useState } from "react";

function App() {
  // useState nos retorna un arreglo con dos valores
  // el primer valor es el valor de la variable ("Juan")
  // el segundo valor es una funcion que nos permite cambiar el valor de la variable
  const [nombre, setNombre] = useState("Juan");
  
  // nombre = "Pepe"; // Esto no se puede hacer
  // setNombre("Pepe"); // Esto si se puede hacer

  // Si queremos cambiar el valor de la variable nombre
  // tenemos que llamar a la funcion setNombre
  return (
    <div>
      <p>Nombre {nombre}</p>
      <button onClick={() => setNombre("Pepe")}>Cambiar nombre</button>
    </div>
  )
}
```
## onChange para Inputs
En react para poder manejar el valor de un input usams el evento onChange este va a permitir captar cada vez que el usuario escriba en el input

```js
function App() {
  const [inputText, setInputText] = useState("");

  function handleInputChange(event) {
    // cambiar el valor de la variable inputText
    // si queremos obtener lo que el usuario escribio
    // usamos event.target.value
    setInputText(event.target.value);
  }

  return (
    <div>
      <p>Nombre {nombre}</p>
      <input type="text" onChange={handleInputChange} />
    </div>
  )
  
}
```

## Sweet Alert
Es un aliobreria que nos permite mostrar alertas en nuestra aplicacion

### Instalacion
```bash
npm install sweetalert
```

### Uso
```js
import Swal from "sweetalert2";
Swal.fire("Titulo", "Mensaje", "Tipo");
```
Tenemos 5 tipos de alertas

-success
-error
-warning
-info
-question

## Limpiando proyecto

Cuanado usamos el comando  `npx create-react-app nombre_del_proyecto`
se crean archivos innecesarios

Lista de ellos
setupTests.js ✅
reportWebVitals.js ✅
logo.svg ✅
App.test.js ✅
public/logo192.png ✅
public/logo512.png ✅

hora tenemos que tener cuidado luego de borrar estos archivos porque surgiran errores.

Para arreglar el error de webVitas solo debemos borrar la linea de import y el uso de la funcion en el archivo index.js
```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```