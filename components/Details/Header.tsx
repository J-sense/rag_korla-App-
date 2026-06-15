import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Header({ onPlusPress }: any) {
  return (
    <View className="flex-row items-center justify-between mt-2 px-4">
      {/* Left Side: Profile Image + Name */}
      <View className="flex-row items-center gap-3">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=300&auto=format&fit=crop",
          }}
          className="w-12 h-12 rounded-full"
        />
        <Text className="text-xl font-bold">Magnus Abrahum</Text>
      </View>

      {/* Right Side: Plus Icon */}
      <Pressable onPress={onPlusPress}>
        <Ionicons name="add-circle-outline" size={40} color="black" />
      </Pressable>
    </View>
  );
}
