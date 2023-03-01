import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToLogin } from "../routes/coordinator";

function FeedPage() {
  const navigate = useNavigate();
  const protectedPage = useProtectedPage();
  return (
    <main>
      {protectedPage}
      <h1>Página de Feed</h1>
      <button onClick={() => goToLogin(navigate)}>Voltar para Login</button>
    </main>
  );
}

export default FeedPage;
