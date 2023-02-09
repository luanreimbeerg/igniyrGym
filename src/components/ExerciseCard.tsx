import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import { Entypo } from "@expo/vector-icons";
type Props = TouchableOpacityProps & {
  name: string;
};

export default function ExerciseCard({ name, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" pr={4} rounded="md" mb={3}>
        <Image
          source={{
            uri: "https://blog.sardinhaevolution.com.br/wp-content/uploads/2020/04/remada-unilateral-1024x567.jpg",
          }}
          alt="imagem"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            {name}
          </Heading>
          <Text
            fontSize="sm"
            color="gray.200"
            mt={1}
            overflow="hidden"
            numberOfLines={2}
          >
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
