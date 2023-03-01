import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { navigateToLogin } from "../routes/coordinator";
import { AdminContainer, BoxDetail } from "./styleAdminPage";

function AdminPage() {
  const { id } = useParams(); //use este hook do router para conseguir fazer a requisição através do id

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      auth: token,
    },
  };

  //proteger a página usando o token
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      //se o token não for true, usuário é mandado para a página de login
      navigateToLogin(navigate);
    }
  }, []);

  const [dados] = useRequestData({}, `/trip/${id}`, headers); //use este hook para receber as informações da requisição.

  const tripDetail = dados.trip;

  return (
    <AdminContainer>
      <h1>Administração: Detalhes da Viagem</h1>
      <hr />
      {tripDetail ? (
        <BoxDetail>
          <h3>{tripDetail.name}</h3>
          <p>{tripDetail.description}</p>
          <p>
            <b>Duração em dias: </b>
            {tripDetail.durationInDays}
          </p>
          <p>
            <b>Data: </b>
            {tripDetail.date}
          </p>
          <p>
            <b>Planeta: </b>
            {tripDetail.planet}
          </p>
        </BoxDetail>
      ) : (
        <h2>Escolha uma das viagens disponiveis </h2>
      )}
    </AdminContainer>
  );
}

export default AdminPage;
