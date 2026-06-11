/* eslint-disable react-hooks/rules-of-hooks */
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function index() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[{ paddingTop: insets.top }]} className="flex-1 bg-zinc-950">
      <StatusBar style="light" />
      <Text className="text-white">index</Text>
    </View>
  );
}
