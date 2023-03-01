import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm.js";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import { baseURL } from "../../constants/baseURL.js";

function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange } = useForm({ email: "", senha: "" });

  const submitForm = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.senha,
    };

    axios
      .post(`${baseURL}/user/login`, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        goToFeed(navigate);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={submitForm}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            name="senha"
            value={form.senha}
            onChange={onChange}
            required
          />
        </InputContainer>
        <button>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
  // onClick={() => }
  //
}

export default LoginPage;
