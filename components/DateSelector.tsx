import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export type DateItem = {
  month: string;
  day: number;
  weekday: string;
  key: string;
};

export const generateDates = (daysCount: number = 10): DateItem[] => {
  const base = new Date(2026, 3, 23);

  return Array.from({ length: daysCount }, (_, i) => {
    const date = new Date(base);
    date.setDate(base.getDate() + i);

    return {
      month: date.toLocaleDateString("en-US", { month: "short" }),
      day: date.getDate(),
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
      key: date.toISOString(),
    };
  });
};

export default function DateSelector() {
  // Bumped to 10 days so it actually scrolls horizontally beautifully
  const dates = generateDates(10);
  const defaultDate = dates[2].key;

  const [selectedDate, setSelectedDate] = useState(defaultDate);

  return (
    <View className="py-4 bg-zinc-950">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {dates.map((item) => {
          const isSelected = item.key === selectedDate;

          return (
            <TouchableOpacity
              key={item.key}
              onPress={() => setSelectedDate(item.key)}
              activeOpacity={0.8}
              className={`items-center justify-center w-16 h-20 rounded-2xl mr-3 border ${
                isSelected
                  ? "bg-white border-white"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              {/* Weekday text */}
              <Text
                className={`text-xs font-medium uppercase tracking-wider ${
                  isSelected ? "text-zinc-950" : "text-zinc-500"
                }`}
              >
                {item.weekday}
              </Text>

              {/* Day number text */}
              <Text
                className={`text-xl font-bold mt-1 ${
                  isSelected ? "text-zinc-950" : "text-white"
                }`}
              >
                {item.day}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
