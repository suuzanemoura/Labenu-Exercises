import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { CardUsers } from "../components/CardUsers";
import { GlobalContext } from "../context/GlobalContext";

export const HomePage = () => {
  const context = useContext(GlobalContext);
  const { labenusers } = context;

  return (
    <>
      <Flex align={"center"} justify={"center"} wrap={"wrap"} gap={"1rem"}>
        {labenusers.map((user) => {
          return <CardUsers key={user.id} user={user} />;
        })}
      </Flex>
    </>
  );
};
