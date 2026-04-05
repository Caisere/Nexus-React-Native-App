import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/colors";

export default function ProfileScreen() {
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
          Profile
        </Text>
      </SafeAreaView>
    </View>
  );
}
