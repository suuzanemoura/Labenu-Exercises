import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToProductPage } from "../routes/coordinator";

function HomePage() {
  const navigate = useNavigate();

  return (
    <section>
      <Header />
      <h1>Página inicial</h1>
      <button onClick={() => goToProductPage(navigate, "00")}>
        Detalhes Produto
      </button>
    </section>
  );
}

export default HomePage;
