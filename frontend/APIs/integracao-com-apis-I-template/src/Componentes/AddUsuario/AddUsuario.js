import React, { useState } from "react";
import axios from "axios";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const headers = {
    headers: {
      Authorization: "suzane-moura-conway",
    },
  };
  const addUser = () => {
    const novoUsuario = {
      name: nome,
      email: email,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        novoUsuario,
        headers
      )
      .then(() => {
        props.getUsers();
        setEmail("");
        setNome("");
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  return (
    <>
      <p>Adicionar novo usuario</p>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={addUser}>Enviar</button>
    </>
  );
}

export default AddUsuario;
