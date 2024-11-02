import Screen from "../../components/molecule/Screen.molecule";
import { Header } from "../../components/molecule/Header.molecule";
import api from "../../services/api";
import { Center, Text } from "native-base";
import { ActivityIndicator } from "react-native";
import CardSeries from "../../components/molecule/Series/CardSeries/CardSeries";
import { seriesImage } from "../../utils/seriesImages";
import LevelSelect from "../../components/molecule/Series/LevelSelect/LevelSelect";
import { useEffect, useState } from "react";

export default function Series() {
  const [selectedLevel, setSelectedLevel] = useState("iniciante");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get(selectedLevel === 'iniciante' ? '/iniciante_divisao' : '/divisao')
      .then((response) => {
        setData(selectedLevel === 'iniciante' ? response.data.divisoesIniciante : response.data.divisoes);
      })
      .catch((error) => {
        setData([]);
        console.log(error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedLevel]);

  function getSelectedLevel(level: string) {
    setSelectedLevel(level);
  }

  return (
    <Screen paddingX={"20px"}>
      <Header title="Séries" />

      <LevelSelect getSelectedLevel={getSelectedLevel} />

      <Text
        my={"30px"}
        color={"#ffffff"}
        textAlign={"center"}
        fontSize={"22px"}
        bold
      >
        Treinos
      </Text>

      {
        isLoading ? 
        <ActivityIndicator
          style={{ marginTop: "50%" }}
          size="large"
          color="#ffffff"
        /> :
        <Center>
          {data?.map((element: any, index: any) => (
            <CardSeries
              key={index}
              id={element.id}
              codigo={element?.codigo}
              descricao={element?.descricao}
              image={seriesImage[index].image}
              selectedLevel={selectedLevel}
            />
          ))}
        </Center>
      }
    </Screen>
  );
}
