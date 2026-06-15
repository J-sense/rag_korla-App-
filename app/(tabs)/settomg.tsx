import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Setting() {
  const SettingItem = ({
    icon,
    title,
    label,
  }: {
    icon?: string;
    title?: string;
    label?: string;
  }) => (
    <Pressable className="flex-row items-center justify-between py-5 border-b border-zinc-100">
      <View className="flex-row items-center gap-4">
        <View className="bg-zinc-100 p-2 rounded-xl">
          <Ionicons name={icon} size={20} color="#3f3f46" />
        </View>
        <Text className="text-zinc-800 text-lg">{title}</Text>
      </View>
      <View className="flex-row items-center gap-2">
        {label && <Text className="text-zinc-400">{label}</Text>}
        <Ionicons name="chevron-forward" size={18} color="#d4d4d8" />
      </View>
    </Pressable>
  );

  return (
    <ScrollView className="flex-1 bg-white px-6">
      <Text className="text-3xl font-bold text-zinc-900 mt-16 mb-8">
        Settings
      </Text>

      {/* Simplified List */}
      <View className="border-t border-zinc-100">
        <SettingItem icon="person-outline" title="Profile" />
        <SettingItem icon="notifications-outline" title="Notifications" />
        <SettingItem
          icon="shield-checkmark-outline"
          title="Privacy & Security"
        />
        <SettingItem icon="language-outline" title="Language" label="English" />
        <SettingItem icon="help-circle-outline" title="Help & Support" />
      </View>

      <Pressable className="mt-10 py-4">
        <Text className="text-red-500 font-semibold text-center">Log Out</Text>
      </Pressable>
    </ScrollView>
  );
}
