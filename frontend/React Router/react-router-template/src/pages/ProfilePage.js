import Header from "../components/Header";
import { MainContainer } from "../style";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const params = useParams();
  return (
    <MainContainer>
      <Header />
      <h1>Página acerca de {params.name}</h1>
    </MainContainer>
  );
}

export default ProfilePage;
