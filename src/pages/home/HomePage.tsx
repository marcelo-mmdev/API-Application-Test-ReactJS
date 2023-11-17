import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface DadosProps {
  name: string;
}

export default function HomePage() {
  // const [dados, setDados] = useState<DadosProps[]>([]);
  const [dados, setDados] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/marcelo-mmdev")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/marcelo-mmdev")
      .then((response) => {
        setDados(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Box>
        {loading ? (
          <Text>Carregando informações ...</Text>
        ) : (
          <>
            <Text>Podemos colocar vários componentes.</Text>
            <Text>{dados?.name}</Text>
          </>
        )}
      </Box>
    </>
  );
}
