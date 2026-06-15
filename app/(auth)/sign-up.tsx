import React, { useState } from "react";
import { View, Text, TextInput, Pressable, SafeAreaView } from "react-native";
import { useRouter, Link } from "expo-router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = () => {
    console.log("Sign Up Clicked", { name, email, password });
    // অ্যাকাউন্ট ক্রিয়েট সফল হলে সরাসরি মেইন অ্যাপে পাঠিয়ে দেওয়া
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-zinc-50">
      <View className="flex-1 justify-center px-6">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-extrabold text-zinc-900 mb-2">
            Create Account
          </Text>
          <Text className="text-zinc-500 text-base">
            Start managing your subscriptions easily
          </Text>
        </View>

        {/* Inputs */}
        <View className="space-y-4 mb-6">
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            className="bg-white p-4 rounded-2xl border border-zinc-200 text-zinc-900 text-base shadow-sm"
          />
          <TextInput
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-white p-4 rounded-2xl border border-zinc-200 text-zinc-900 text-base shadow-sm mt-3"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-white p-4 rounded-2xl border border-zinc-200 text-zinc-900 text-base shadow-sm mt-3"
          />
        </View>

        {/* Sign Up Button */}
        <Pressable
          onPress={handleSignUp}
          className="bg-zinc-950 p-4 rounded-2xl items-center shadow-md active:opacity-90"
        >
          <Text className="text-white font-bold text-lg">Create Account</Text>
        </Pressable>

        {/* Footer Link */}
        <View className="flex-row justify-center mt-8">
          <Text className="text-zinc-500 text-base">
            Already have an account?{" "}
          </Text>
          <Link href="/(auth)/sing-in" asChild>
            <Pressable>
              <Text className="text-zinc-950 font-bold text-base underline">
                Sign In
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
