import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  const onChangeFoto = (e) => {
    props.setUrlFoto(e.target.value)
  };

  const onChangeDescricao = (e) => {
    props.setDescricao(e.target.value)
  };

  const onChangeTitulo = (e) => {
    props.setTitulo(e.target.value)
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
      <StyledLabel htmlFor="titulo">
          Título da postagem:
          <Input id="titulo" value={props.titulo} onChange={onChangeTitulo} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.urlFoto} onChange={onChangeFoto} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={onChangeDescricao} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro