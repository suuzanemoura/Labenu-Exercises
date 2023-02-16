import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams();
  return (
    <section>
      <Header />
      <h1>Página do Produto {params.id}</h1>
    </section>
  );
}

export default ProductPage;
