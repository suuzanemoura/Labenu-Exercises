import { Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { handleHomePage } from "../routes/coordinator";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Heading as="h1" size={"2xl"}>
        Página não encontrada, volte para o início.
      </Heading>
      <Button onClick={() => handleHomePage(navigate)}>Voltar</Button>
    </>
  );
};
