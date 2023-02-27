import Header from "../components/Header";
import { MainContainer } from "../style";

function ErrorPage() {
  return (
    <MainContainer>
      <Header />
      <h1>Essa página não existe.</h1>
    </MainContainer>
  );
}

export default ErrorPage;
