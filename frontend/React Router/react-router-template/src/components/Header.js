import { StyledHeader, StyledButton } from "../style";
import { useNavigate } from "react-router-dom";
import {
  goToHomePage,
  goToProfilePage,
  goToLoginPage,
} from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfilePage(navigate, "Conway")}>
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={() => goToLoginPage(navigate)}>
        Faça Login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
