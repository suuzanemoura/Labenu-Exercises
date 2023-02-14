import React, { useEffect, useState } from "react";
import AddUsuario from "./Componentes/AddUsuario/AddUsuario";
import Usuario from "./Componentes/Usuario/Usuario";
import axios from "axios";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "suzane-moura-conway",
          },
        }
      )
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <p>
        Para esta aula usaremos a{" "}
        <a
          href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro"
          target="_blank"
          rel="noreferrer"
        >
          API Labenusers
        </a>
      </p>
      <AddUsuario getUsers={getUsers} />
      {usuarios.map((usuario) => {
        return (
          <Usuario key={usuario.id} usuario={usuario} getUsers={getUsers} />
        );
      })}
    </>
  );
}

export default App;
