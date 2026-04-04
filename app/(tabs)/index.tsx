import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Home Screen</Text>

      <Text style={{ fontSize: 18, color: 'white' }}>Count: {count}</Text>

      <Pressable
        style={{ backgroundColor: "blue", padding: 16, borderRadius: 8 }}
        onPress={() => setCount(count + 1)}
      >
        <Text style={{ color: "white" }}>Increment</Text>
      </Pressable>

      <Pressable
        style={{ backgroundColor: "green", padding: 16, borderRadius: 8 }}
        onPress={() => router.push("/profile")}
      >
        <Text style={{ color: "white" }}>Go to Profile</Text>
      </Pressable>
    </SafeAreaView>
  );
}
