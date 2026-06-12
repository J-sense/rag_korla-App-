/* eslint-disable react/no-unescaped-entities */
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
export default function Header() {
  return (
    <View className="flex-row  justify-between items-center p-6">
      <TouchableOpacity>
        <Ionicons
          name="chevron-back"
          size={22}
          style={{ color: "white" }}
          className="bg-zinc-800 p-1 rounded"
        />
      </TouchableOpacity>
      <Text className="text-white">Today's Date</Text>
      <TouchableOpacity>
        <Ionicons
          name="chevron-forward"
          size={22}
          style={{ color: "white" }}
          className="bg-zinc-800 p-1 rounded"
        />
      </TouchableOpacity>
    </View>
  );
}
