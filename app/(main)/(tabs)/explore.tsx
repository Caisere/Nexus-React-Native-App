import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/colors";
import { useAuthStore } from "@/store/authStore";

export default function ExploreScreen() {
  const logout = useAuthStore(state => state.logout)
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <SafeAreaView edges={["top"]}>
        <Text
          style={{
            color: Colors.textPrimary,
            fontSize: 24,
            fontWeight: "800",
            padding: 24,
          }}
        >
          Explore
        </Text>
        <Button title="Sign Out" onPress={() => logout()} />;
      </SafeAreaView>
    </View>
  );
}

