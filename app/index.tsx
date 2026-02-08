import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background-light px-6">
      <Pressable
        onPress={() => router.replace("/(tabs)/home")}
        className="h-16 w-full rounded-full bg-primary items-center justify-center"
      >
        <Text className="text-white text-lg font-bold">Scan Barcode</Text>
      </Pressable>
    </View>
  );
}
