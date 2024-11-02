import { useState } from "react";
import { Box, Center, HStack, Image, Text } from "native-base";

import Screen from "../../components/molecule/Screen.molecule";
import { Header } from "../../components/molecule/Header.molecule";
import TrainingDaysAmount from "../../components/molecule/TrainingDivision/TrainingDaysAmount/TrainingDaysAmount";
import TrainingSeriesTicket from "../../components/molecule/TrainingDivision/TrainingSeriesTicket/TrainingSeriesTicket";
import Observations from "../../components/molecule/TrainingDivision/Observations/Observations";

import { days, greenhornTrainingWeeks, trainingWeeks } from "../../utils/TrainingDivision";
import LevelSelect from "../../components/molecule/Series/LevelSelect/LevelSelect";

export default function TrainingDivision() {
  const [trainingDaysAmout, setTrainingDaysAmout] = useState('3');
  const [selectedLevel, setSelectedLevel] = useState('3');

  function getTrainingDaysAmount(amount: string) {
    setTrainingDaysAmout(amount)
  }

  function getSelectedLevel(amount: string) {
    setSelectedLevel(amount)
  }

  return (
    <Screen paddingX={'20px'}>
      <Header title="Divisão de treinos" />

      <LevelSelect getSelectedLevel={getSelectedLevel} />

      <TrainingDaysAmount getTrainingDaysAmount={getTrainingDaysAmount} />

      <TrainingSeriesTicket selectedLevel={selectedLevel} />

      <Center mt={'20px'} flexDirection={'row'} flexWrap={'wrap'}>
        {
          days.map((day: string, index: number) => (
            <Box borderWidth={'1px'} borderColor={`${trainingWeeks[+trainingDaysAmout-3].week_days[index].includes('Sem treino' as any) ? '#E37C7C' : '#5968DF'}`} key={index} rounded={'5px'} m={'5px'} w={'100px'} h={'80px'} bg={'#ffffff'}>
              <HStack bg={`${trainingWeeks[+trainingDaysAmout-3].week_days[index].includes('Sem treino' as any) ? '#E37C7C' : '#5968DF'}`}>
                <Image tintColor={'#ffffff'} w={'22px'} h={'22px'} source={require('../../assets/images/calendar.png')} />

                <Text bold color={'#ffffff'}>{day}</Text>
              </HStack>

              <HStack h={'50px'} alignItems={'center'} justifyContent={'center'} p={'5px'}>
                {
                  (selectedLevel === 'iniciante' ? greenhornTrainingWeeks : trainingWeeks)[+trainingDaysAmout-3].week_days[index].map((trainning: any, index, array) => (
                    <HStack alignItems={'center'}>
                      {
                        trainning?.icon ? <trainning.icon /> : <Text borderWidth={1} borderColor={'#000000'} p={'2px'}>{trainning}</Text>
                      }

                      {
                        array.length > 1 && index < array.length - 1 && <Text mx={'5px'}>ou</Text>
                      }
                    </HStack>
                  ))
                }
              </HStack>
            </Box>  
          ))
        }
      </Center>

      {
        selectedLevel !== 'iniciante' && <Observations trainingDaysAmout={trainingDaysAmout} />
      }
      
    </Screen>
  )
}