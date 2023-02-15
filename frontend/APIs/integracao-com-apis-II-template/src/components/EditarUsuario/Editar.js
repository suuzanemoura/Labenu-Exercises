import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ButtonNome,
  DeleteButton,
  ButtonContainer,
  MainContainer,
  InputContainer,
  SaveButton,
  CloseButton,
} from "./style";
import { AiOutlineDelete } from "react-icons/ai";
import { Input } from "../../Appstyle";

export const EditarUsuario = (props) => {
  const [usuario, setUsuario] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [editar, setEditar] = useState(false);

  const getDadosUsuario = async () => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${props.id}`,
        {
          headers: {
            Authorization: "suzane-moura-conway",
          },
        }
      );
      setUsuario(response.data);
      setEmail(response.data.email);
      setName(response.data.name);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getDadosUsuario();
  }, []);

  const editaUsuario = async () => {
    const body = {
      name,
      email,
    };

    try {
      await axios.put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`,
        body,
        {
          headers: {
            Authorization: "suzane-moura-conway",
          },
        }
      );

      getDadosUsuario();
      setEditar(!editar);
    } catch (error) {
      console.log(error.response);
    }
  };

  const deletarUsuario = async () => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`,
        {
          headers: {
            Authorization: "suzane-moura-conway",
          },
        }
      );
      alert("usuario removido");
      props.getUsuarios();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <MainContainer>
      {editar ? (
        <InputContainer>
          <Input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SaveButton onClick={editaUsuario}>Salvar</SaveButton>
          <CloseButton onClick={() => setEditar(!editar)}>Fechar</CloseButton>
        </InputContainer>
      ) : (
        <ButtonContainer>
          <ButtonNome onClick={() => setEditar(!editar)}>
            {usuario.name}
          </ButtonNome>
          <DeleteButton onClick={deletarUsuario}>
            <AiOutlineDelete />
          </DeleteButton>
        </ButtonContainer>
      )}
    </MainContainer>
  );
};
