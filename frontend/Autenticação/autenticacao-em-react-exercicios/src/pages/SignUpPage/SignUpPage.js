import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../constants/baseURL";
import useForm from "../../hooks/useForm";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";

function SignUpPage() {
  const navigate = useNavigate();
  const { form, onChange } = useForm({ nome: "", email: "", senha: "" });

  const submitForm = (event) => {
    event.preventDefault();

    const body = {
      name: form.nome,
      email: form.email,
      password: form.senha,
    };

    axios
      .post(`${baseURL}/user/signup`, body)
      .then((res) => {
        console.log(res.data.token);
        window.localStorage.setItem("token", res.data.token);
        goToFeed(navigate);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={submitForm}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="nome"
            value={form.nome}
            onChange={onChange}
            required
          />
        </InputContainer>
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
            name="senha"
            value={form.senha}
            onChange={onChange}
            type="password"
            required
          />
        </InputContainer>

        <button>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;
