import axios from "axios";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SecondCard from "./components/SecondCard";
import { theme } from "./theme";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Flex gap="16px" wrap="wrap">
        {users.map((user) => {
          return <SecondCard key={user.id} user={user} />;
        })}
      </Flex>
    </ChakraProvider>
  );
}
