import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        Profile Screen
      </Text>
      <Pressable
        style={{
          backgroundColor: "green",
          padding: 16,
          alignItems: "center",
          borderRadius: 8,
        }}
        onPress={() => {
          router.back();
        }}
      >
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          Back Home
        </Text>
      </Pressable>
      <Pressable
        style={{ backgroundColor: "green", padding: 16, borderRadius: 8 }}
        onPress={() => router.push('/settings')}
      >
        <Text style={{ color: "white" }}>Go to settings</Text>
      </Pressable>
    </SafeAreaView>
  );
}
