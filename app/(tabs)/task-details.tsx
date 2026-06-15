import Header from "@/components/Details/Header";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// --- Data ---
const subscriptions = [
  {
    id: "1",
    name: "Spotify Premium",
    price: 9.99,
    date: "12 Jun, 2026",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png",
  },
  {
    id: "2",
    name: "Notion Pro",
    price: 15.0,
    date: "15 Jun, 2026",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Notion_app_logo.png/512px-Notion_app_logo.png",
  },
  {
    id: "3",
    name: "Figma Professional",
    price: 12.0,
    date: "20 Jun, 2026",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/300px-Figma-logo.svg.png",
  },
  {
    id: "4",
    name: "GitHub Copilot",
    price: 10.0,
    date: "22 Jun, 2026",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/512px-Octicons-mark-github.svg.png",
  },
];

const items = [
  {
    id: 1,
    name: "Spotify",
    price: 9.99,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png",
  },
  {
    id: 2,
    name: "Notion",
    price: 0.0,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Notion_app_logo.png/512px-Notion_app_logo.png",
  },
  {
    id: 3,
    name: "Figma",
    price: 12.0,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/300px-Figma-logo.svg.png",
  },
];

// --- Main Component ---
export default function Details() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const renderHeader = () => (
    <View className="px-5 pb-5">
      <Header onPlusPress={() => setIsModalVisible(true)} />

      {/* Balance Card */}
      <View className="bg-zinc-900 mt-6 p-6 rounded-[32px] shadow-2xl">
        <Text className="text-zinc-400 font-medium uppercase tracking-widest text-xs">
          Total Balance
        </Text>
        <View className="flex-row items-end justify-between mt-2">
          <Text className="text-4xl font-extrabold text-white">$ 4,000.00</Text>
          <View className="bg-white/10 px-3 py-1 rounded-full">
            <Text className="text-white font-medium text-xs">
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </Text>
          </View>
        </View>
      </View>

      {/* Upcoming Section */}
      <View className="mt-8">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-2xl font-bold text-zinc-900">Upcoming</Text>
          <TouchableOpacity>
            <Text className="text-orange-500 font-semibold">View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="bg-white p-4 mr-4 rounded-3xl border border-zinc-100 w-52 shadow-sm">
              <Image
                source={{ uri: item.image }}
                className="w-12 h-12 rounded-2xl mb-3"
              />
              <Text className="font-bold text-lg">{item.name}</Text>
              <Text className="text-zinc-400 font-medium">
                ${item.price.toFixed(2)}
              </Text>
            </View>
          )}
        />
      </View>

      <Text className="text-2xl font-bold mt-6 mb-2">All Subscription</Text>
    </View>
  );
  const [expanded, setExpanded] = useState();
  const handleAddSubscription = () => {};
  return (
    <FlatList
      data={subscriptions}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={{ paddingBottom: 120 }}
      renderItem={({ item }: any) => (
        <>
          <Pressable
            onPress={() => setExpanded(item.id === expanded ? null : item.id)}
          >
            <View className="flex-row items-center justify-between p-4 mx-4 mb-3 bg-white rounded-3xl border border-zinc-100 shadow-sm">
              <View className="flex-row items-center gap-4">
                <View className="bg-zinc-100 p-3 rounded-2xl">
                  <Image
                    source={{ uri: item.icon }}
                    className="w-8 h-8 rounded-full"
                  />
                </View>
                <View>
                  <Text className="text-lg font-bold text-zinc-900">
                    {item.name}
                  </Text>
                  <Text className="text-zinc-400 text-sm">{item.date}</Text>
                </View>
              </View>
              <Text className="font-bold text-zinc-900">
                -${item.price.toFixed(2)}
              </Text>
            </View>
            {item.id === expanded && (
              <View className="px-8 pb-4">
                <Text>Additional details for {item.name} go here.</Text>
              </View>
            )}
          </Pressable>
          <Modal
            visible={isModalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setIsModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center bg-black/50">
              <View className="bg-white p-8 rounded-3xl w-[90%] shadow-lg">
                <Text className="text-2xl font-bold mb-6 text-zinc-900">
                  Add Subscription
                </Text>

                {/* Name Input */}
                <TextInput
                  placeholder="Subscription Name"
                  value={name}
                  onChangeText={setName}
                  className="bg-zinc-100 p-4 rounded-2xl mb-4 border border-zinc-200"
                />

                {/* Price Input */}
                <TextInput
                  placeholder="Price (e.g., 9.99)"
                  value={price}
                  onChangeText={setPrice}
                  keyboardType="decimal-pad"
                  className="bg-zinc-100 p-4 rounded-2xl mb-6 border border-zinc-200"
                />

                {/* Submit Button */}
                <Pressable
                  onPress={handleAddSubscription}
                  className="bg-zinc-900 p-4 rounded-2xl items-center"
                >
                  <Text className="text-white font-bold text-lg">
                    Add Subscription
                  </Text>
                </Pressable>

                {/* Close Button */}
                <Pressable
                  onPress={() => setIsModalVisible(false)}
                  className="mt-4 items-center"
                >
                  <Text className="text-zinc-400 font-semibold">Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </>
      )}
    />
  );
}
