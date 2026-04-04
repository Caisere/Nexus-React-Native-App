import { Colors } from "@/constants/colors";
import { useAuthStore } from "@/store/authStore";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  const logout = useAuthStore((state) => state.logout)
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={{ flex: 1, padding: 40 }}>
        <Text style={{ color: "black" }}>Explore</Text>
      </View>

      <Button title="Sign Out" onPress={() => logout()} />

      {/* <Pressable onPress={() => logout()} style={{}}>
        <Text style={styles.loginLink}>Logout</Text>
      </Pressable> */}
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  glowTop: {
    position: "absolute",
    top: -100,
    left: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: Colors.primary,
    opacity: 0.12,
  },
  glowBottom: {
    position: "absolute",
    bottom: -100,
    right: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: Colors.primaryDark,
    opacity: 0.15,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 32,
  },
  header: {
    alignItems: "center",
    paddingTop: 16,
    gap: 12,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
  },
  backText: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  logoIcon: {
    fontSize: 24,
    color: Colors.textPrimary,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  form: {
    gap: 20,
  },
  actions: {
    gap: 16,
  },
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: Colors.textSecondary,
    fontSize: 15,
  },
  loginLink: {
    color: Colors.primaryLight,
    fontSize: 15,
    fontWeight: "600",
  },
});

