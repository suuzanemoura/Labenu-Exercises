import React from "react";
import { Title } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({post}) => {

    return(
      <ContainerPostagem>
      <Title>{post.title}</Title>
      <Image src={post.image} />
      <Description>{post.description}</Description>
      </ContainerPostagem>
    )
};

export default TelaDaPostagem;
