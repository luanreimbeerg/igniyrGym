import { useState } from "react";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";

import Group from "@components/Group";
import HomeHeader from "@components/HomeHeader";
import ExerciseCard from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNagigatorRoutesProps } from "@routes/app.routes";

export default function Home() {
  const [group, setGroup] = useState(["costas", "Bíceps", "Tríceps", "ombro"]);
  const [exercise, setExercise] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
  ]);
  const [groupSelected, setGroupSelected] = useState("costas");

  const navigation = useNavigation<AppNagigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={group}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            onPress={() => setGroupSelected(item)}
            name={item}
            isActive={groupSelected === item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" marginBottom={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>

        <FlatList
          data={exercise}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard name={item} onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
