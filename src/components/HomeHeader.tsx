import { TouchableOpacity } from "react-native";
import { Heading, HStack, Icon, Text, VStack, ZStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import UserPhote from "./UserPhote";

export default function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhote
        source={{ uri: "https://github.com/luanreimbeerg.png" }}
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olaa
        </Text>

        <Heading color="gray.100" fontSize="md">
          Luan
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
