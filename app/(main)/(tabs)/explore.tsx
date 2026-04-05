import { Colors } from "@/constants/colors";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
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
      </SafeAreaView>
    </View>
  );
}
