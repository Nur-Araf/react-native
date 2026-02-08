import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function AppHeader({ title }: { title: string }) {
  return (
    <View className="flex-row items-center bg-white px-4 pb-2 pt-4">
      <View className="h-12 w-12 items-center justify-center">
        <MaterialIcons name="shield" size={28} color="#137fec" />
      </View>

      <Text className="flex-1 text-center text-lg font-bold pr-12">
        {title}
      </Text>
    </View>
  );
}
