import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";


const FormularioLogin = (props) => {

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input
          type={"text"}
          value={props.name}
          onChange={props.handleInputName}
          />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
          type={"text"}
          value={props.profilePhoto}
          onChange={props.handleInputProfilePhoto}
          />
        </StyledLabel>
        <SendButton onClick={props.login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
