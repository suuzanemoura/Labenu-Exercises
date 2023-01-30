import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro</h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numero">
          Número:
          <Input type="number" id="numero" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone para contato:
          <Input type="tel" id="telefone" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>
          Já possuo um cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
