import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
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
        Settings Screen
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
          Back Profile
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
