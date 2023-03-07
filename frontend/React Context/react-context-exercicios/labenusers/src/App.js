import { Router } from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalContext } from "./context/GlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [labenusers, setLabenusers] = useState([]);
  const [select, setSelect] = useState();

  const headers = {
    headers: {
      Authorization: "suzane-moura-conway",
    },
  };

  useEffect(() => {
    fetchLabenusers();
  }, []);

  const fetchLabenusers = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        headers
      );
      setLabenusers(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de Labenusers");
      console.log(error.response);
    }
  };

  const context = {
    labenusers,
    select,
    setSelect,
  };

  return (
    <ChakraProvider resetCSS>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </ChakraProvider>
  );
}

export default App;
