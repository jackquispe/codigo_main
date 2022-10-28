import {useState} from "react";
import Avatar from "./components/Avatar";
import SearchContainer from "./components/SearchContainer";
import UserInformation from "./components/UserInformation";

import Swal from "sweetalert2";
import './App.css';






// Componente:  que es un bloque de vista el cual conbina lo que es HTML y JS
const App = () => {
  const [inputText, setInputText] = useState("");

  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  async function searchUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();

      //vamos a vlaidar que el usuario exista
      if(data.message==="Not Found"){

        Swal.fire("Error", "El usuario que buscas no existe", "error")
        setInputText("");
        return;

      }

      setUser(data);
      //Hacemos que el inputText vuelva a estar vacio
      setInputText("");
    } catch (error) {
      console.log("Error", error);

    }
  }
    
  
  return (
    <div className="container">
        
        <Avatar/>
        
        <SearchContainer
        inputText={inputText}
        handleInputChange={handleInputChange}
        searchUser={searchUser}
      />
        
        {/**aca podemos hacer una validacion donde digamos que el div que siga existe siempre que tenga datos
         */}
        {user && <UserInformation user={user}/>}
        
    </div>
  );
};

export default App;