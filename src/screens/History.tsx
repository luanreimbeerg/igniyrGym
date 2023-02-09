import HistoryCard from "@components/HistoryCard";
import ScreenHeader from "@components/ScreenHeader";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

export default function History() {
  const [exercise, setExercise] = useState([
    {
      title: "26.08.22",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "28.08.22",
      data: ["Puxada frontal", "Remada unilateral"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
      <SectionList
        sections={exercise}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={5}
        contentContainerStyle={
          exercise.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrado ainda. {"\n"}
            Vamos fazer exercíos hoje?
          </Text>
        )}
      />
    </VStack>
  );
}
