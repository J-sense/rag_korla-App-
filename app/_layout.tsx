import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// 👈 আমাদের তৈরি করা কনটেক্সট
import { AuthProvider, useAuth } from "@/providers/AuthProviders";
import "../global.css";

SplashScreen.preventAutoHideAsync();

function AppNavigation() {
  const [isReady, setIsReady] = useState(false);
  const { isAuthenticated } = useAuth(); // 👈 গ্লোবাল স্টেট এক্সেস করা
  const segments = useSegments();
  const router = useRouter();

  SplashScreen.setOptions({
    duration: 5000,
    fade: true,
  });

  useEffect(() => {
    async function doAsyncStuff() {
      try {
        // ডেমো টাস্ক
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    doAsyncStuff();
  }, []);

  // 🛡️ প্রোটেক্টেড রাউটিং লজিক (স্টেট ট্রু বা ফলস হলে অটো কাজ করবে)
  useEffect(() => {
    if (!isReady) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isAuthenticated && !inAuthGroup) {
      router.replace("/(auth)/sing-in");
    } else if (isAuthenticated && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated, isReady, segments]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#000000" },
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}

// 👑 মেইন রুট লেআউট
export default function RootLayout() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
