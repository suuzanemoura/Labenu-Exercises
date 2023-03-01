import React from "react";
import { MainContainer, Form, Input } from "./styles";
import { useForm } from "../../hooks/useForm";

function MainPage() {
  const { form, onChangeForm } = useForm({
    nome: "",
    idade: "",
    email: "",
    profissao: "",
  });
  // const [nome, setNome] = useState("");
  // const [idade, setIdade] = useState("");
  // const [email, setEmail] = useState("");

  // const onChangeNome = (event) => {
  //   setForm({ ...form, nome: event.target.value });
  // };

  // const onChangeIdade = (event) => {
  //   setForm({ ...form, idade: event.target.value });
  // };

  // const onChangeEmail = (event) => {
  //   setForm({ ...form, email: event.target.value });
  // };

  const handleClick = (event) => {
    event.preventDefault();

    console.log(
      `nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email} `
    );
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          id="nome"
          name={"nome"}
          type="text"
          value={form.nome}
          onChange={onChangeForm}
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          id="idade"
          name={"idade"}
          type="number"
          value={form.idade}
          onChange={onChangeForm}
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          id="email"
          name={"email"}
          type="email"
          value={form.email}
          pattern="\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b"
          // placeholder={"nome@email.com"}
          // title={"email precisa ser no formato nome@email.com"}
          onChange={onChangeForm}
        />

        <label htmlFor="profissao">Profissão:</label>
        <Input
          id="profissao"
          name={"profissao"}
          value={form.profissao}
          onChange={onChangeForm}
          required
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
