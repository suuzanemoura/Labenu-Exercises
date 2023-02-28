import React from "react";
import { useForm } from "../../hooks/useForm";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const { form, onChangeForm } = useForm({
    nome: "",
    modulos: "",
    tecnologias: "",
    responsavel: "",
  });

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit="">
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
          type="text"
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          id="modulos"
          name="modulos"
          value={form.modulos}
          onChange={onChangeForm}
          // type="number"
          // min="2"
          pattern="^(0*[2-9]|[1-9][0-9]+)$"
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChangeForm}
          type="text"
          required
        />

        <label htmlFor="responsavel">Responsável: </label>
        <Input
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          onChange={onChangeForm}
          // type="text"
          // minLength="5"
          pattern="^.\p{L}[^0-9]{5,}$"
          // pattern="^[\p{L}\s]{5,}$"
          required
        />
        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
