import { useAuth } from "@/providers/AuthProviders";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // 👈 লগইন ফাংশনটি বের করে নাও

  const handleSignIn = () => {
    console.log("Sign In Clicked", { email, password });

    // 🔐 এই ফাংশনটি কল করা মাত্রই গ্লোবাল isAuthenticated = true হয়ে যাবে
    login();

    // নোট: এখানে আর router.replace("/(tabs)") ম্যানুয়ালি লেখা লাগবে না।
    // Layout ফাইলের useEffect স্টেট ট্রু হওয়া মাত্রই ইউজারকে অটোম্যাটিক হোম পেজে নিয়ে যাবে!
  };

  return (
    <SafeAreaView className="flex-1 bg-zinc-50">
      <View className="flex-1 justify-center px-6">
        <View className="mb-8">
          <Text className="text-3xl font-extrabold text-zinc-900 mb-2">
            Welcome Back
          </Text>
          <Text className="text-zinc-500 text-base">
            Sign in to continue your subscription tracker
          </Text>
        </View>

        <View className="space-y-4 mb-6">
          <TextInput
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-white p-4 rounded-2xl border border-zinc-200 text-zinc-900 text-base shadow-sm"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-white p-4 rounded-2xl border border-zinc-200 text-zinc-900 text-base shadow-sm mt-3"
          />
        </View>

        <Pressable
          onPress={handleSignIn}
          className="bg-zinc-950 p-4 rounded-2xl items-center shadow-md active:opacity-90"
        >
          <Text className="text-white font-bold text-lg">Sign In</Text>
        </Pressable>

        <View className="flex-row justify-center mt-8">
          <Text className="text-zinc-500 text-base">
            Don't have an account?{" "}
          </Text>
          <Link href="/(auth)/sign-up" asChild>
            <Pressable>
              <Text className="text-zinc-950 font-bold text-base underline">
                Sign Up
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
