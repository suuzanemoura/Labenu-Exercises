import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const CardUsers = (props) => {
  const context = useContext(GlobalContext);
  const { select, setSelect } = context;
  const { user } = props;
  return (
    <Card
      maxW="sm"
      border={user.id === select ? "3px solid orange" : 0}
      onClick={() => setSelect(user.id)}
    >
      <CardBody>
        <Image
          w={"100px"}
          backgroundColor={"ffdfbf"}
          src={`https://api.dicebear.com/5.x/fun-emoji/svg?seed=${user.name}`}
          alt={user.name}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{user.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};
