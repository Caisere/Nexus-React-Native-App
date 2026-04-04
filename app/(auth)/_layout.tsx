import { useAuthStore } from "@/store/authStore";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect href="/(main)/(tabs)/feed" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
