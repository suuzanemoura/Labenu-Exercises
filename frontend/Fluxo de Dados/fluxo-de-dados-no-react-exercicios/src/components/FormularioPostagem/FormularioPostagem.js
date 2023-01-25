import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input
          id="titulo"
          type={"text"}
          value={props.title}
          onChange={props.handleInputTitle}
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input
          id="foto"
          type={"text"}
          value={props.urlPhoto}
          onChange={props.handleInputUrlPhoto}
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
          id="descricao"
          type={"text"}
          value={props.description}
          onChange={props.handleInputDescription}
          />
        </StyledLabel>
      </Form>
      <SendButton onClick={props.sendPhoto}>Enviar</SendButton>
      <SendButton onClick={props.logOut}>Sair</SendButton>
    </FormContainer>
  );
};

export default FormularioCadastro;
