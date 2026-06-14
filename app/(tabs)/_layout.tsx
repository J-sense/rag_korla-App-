import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Hides text labels

        // 1. Force the layout container to center its contents
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        },

        // 2. Adjust the bar dimensions cleanly
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "green",
          borderTopWidth: 0,
          elevation: 0,
          borderRadius: 100,
          marginRight: 40,
          marginLeft: 40,
          marginBottom: 20,
          padding: 10,
          marginTop: 30,
          height: 60, // Clean standard height
          paddingBottom: 0, // Removes the hidden text padding rule
        },
      }}
    >
      {/* HOME TAB */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center px-5 py-2 rounded-full transition-all duration-200 
    ${focused ? "bg-yellow-200 scale-105" : "bg-zinc-400 rounded-4xl"}`}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={22}
                className={focused ? "text-yellow-400" : "text-white"}
              />
            </View>
          ),
        }}
      />

      {/* DETAILS TAB */}
      <Tabs.Screen
        name="task-details"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center px-5 py-2 rounded-full border
    ${focused ? "bg-yellow-200 scale-105" : "bg-zinc-400 rounded-4xl"}`}
            >
              <Ionicons
                name={focused ? "list" : "list-outline"}
                size={22}
                className={focused ? "text-yellow-500" : ""}
              />
            </View>
          ),
        }}
      />

      {/* SETTINGS TAB */}
      <Tabs.Screen
        name="settomg"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center px-5 py-2 rounded-full border
    ${focused ? "bg-yellow-200 scale-105" : "bg-zinc-400 rounded-4xl"}`}
            >
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={22}
                className={focused ? "text-yellow-500" : ""}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
