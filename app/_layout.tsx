import { Stack } from "expo-router";
// Ignore missing type declarations for global CSS side-effect import
// @ts-ignore
import "../global.css";
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
