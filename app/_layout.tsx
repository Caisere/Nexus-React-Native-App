import { Colors } from "@/constants/colors";
import "@/global.css";
import { useAuthStore } from "@/store/authStore";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const { isHydrated } = useAuthStore();

  if (!isHydrated) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <ActivityIndicator className="text-primary" size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider className="bg-background">
      <StatusBar style="light" backgroundColor={Colors.background} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(main)" />
      </Stack>
    </SafeAreaProvider>
  );
}
