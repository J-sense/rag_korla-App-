/* eslint-disable react-hooks/rules-of-hooks */
import DateSelector from "@/components/DateSelector";
import Header from "@/components/Header";
import ToDoSelector from "@/components/ToDoSelector";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const initialTodos = [
  {
    id: "t1",
    title: "Review MERN stack pull requests",
    isCompleted: false,
    category: "Work",
    time: "10:00 AM",
  },
  {
    id: "t2",
    title: "Fix Nginx reverse proxy configuration",
    isCompleted: true,
    category: "DevOps",
    time: "11:30 AM",
  },
  {
    id: "t3",
    title: "Hit the gym / Evening workout",
    isCompleted: false,
    category: "Personal",
    time: "06:00 PM",
  },
  {
    id: "t4",
    title: "Read Urdu poetry collection",
    isCompleted: false,
    category: "Leisure",
    time: "09:30 PM",
  },
];

export default function index() {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredTodos =
    activeCategory && activeCategory !== "All"
      ? initialTodos.filter((todo) => todo.category === activeCategory)
      : initialTodos;

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 bg-zinc-950">
      <StatusBar style="light" />
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        // ১. renderItem এখন একদম ক্লিন এবং শুধু কার্ডটি রেন্ডার করবে
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push("/task-details")}>
            <View className="p-4 mx-4 mb-2 bg-zinc-900 border border-zinc-800 rounded-2xl flex-row justify-between items-center">
              <View className="flex-1 mr-4">
                <Text
                  className={`text-base font-medium ${
                    item.isCompleted
                      ? "text-zinc-500 line-through"
                      : "text-white"
                  }`}
                >
                  {item.title}
                </Text>
                <Text className="text-xs text-zinc-500 mt-1">{item.time}</Text>
              </View>
              <Text className="text-xs text-zinc-400 bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800 self-start">
                {item.category}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        // ২. ফিল্টার করার পর কোনো আইটেম না থাকলে এই অংশটি নিজে থেকেই স্ক্রিনে দেখাবে
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <Text className="text-zinc-500 text-base font-medium">
              No tasks found for this category
            </Text>
          </View>
        }
        ListHeaderComponent={
          <View className="gap-y-4 mb-4">
            <Header />
            <DateSelector />
            <ToDoSelector
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </View>
        }
      />
    </View>
  );
}
