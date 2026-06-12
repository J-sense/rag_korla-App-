import { FlatList, Text, TouchableOpacity } from "react-native";

type ToDoSelectorProps = {
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

const categories = [
  "All",
  "Work",
  "DevOps",
  "Personal",
  "Leisure",
  "None fo these",
];

export default function ToDoSelector({
  activeCategory,
  onSelectCategory,
}: ToDoSelectorProps) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={(item) => item}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      renderItem={({ item: cat }) => {
        const isSelected = cat === (activeCategory || "All");
        return (
          <TouchableOpacity
            onPress={() => onSelectCategory(cat === "All" ? null : cat)}
            className={`px-4 py-2 rounded-full mr-2 border ${
              isSelected
                ? "bg-white border-white"
                : "bg-zinc-900 border-zinc-800"
            }`}
          >
            <Text
              className={`text-xs font-semibold ${isSelected ? "text-zinc-950" : "text-zinc-400"}`}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}
