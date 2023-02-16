import { StyledHeader, StyledButton } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToProfilePage } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHomePage(navigate)}>Início</StyledButton>
      <StyledButton onClick={() => goToProfilePage(navigate)}>
        Perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
