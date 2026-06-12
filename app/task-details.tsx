import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Details() {
  const insets = useSafeAreaInsets();

  return (
    <View className="bg-black flex-1" style={{ paddingTop: insets.top }}>
      <Text className="text-white">Details</Text>
    </View>
  );
}
