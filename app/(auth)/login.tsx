import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Colors } from "@/constants/colors";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuthStore } from "@/store/authStore";
import { verifyEmail } from "@/libs/validations";

export default function LoginScreen() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [loading, setLoading] = useState<boolean>(false);

  const setUser = useAuthStore((state) => state.setUser);

  const validate = (): boolean => {

    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required"
    } else if (verifyEmail(email))
      newErrors.email = "Enter a valid email";

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {

    if (!validate()) return;

    setLoading(true);

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1500)); // stimulating till db setup complete
      setUser(
        {
          id: "1",
          email,
          username: "taken_shola",
          bio: "Building cool stuff",
          avatarUrl: null,
        },
        "tskhjkdd.sthjsdbbfjjkssdsfd.sdhdujff",
      );
    } catch {
      setErrors({ email: "Invalid email or password" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.glow} />

      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.header}>
              <Pressable
                onPress={() => router.back()}
                style={styles.backButton}
              >
                <Text style={styles.backText}>← Back</Text>
              </Pressable>
              <View style={styles.logoContainer}>
                <Text style={styles.logoIcon}>✦</Text>
              </View>
              <Text style={styles.title}>Welcome back</Text>
              <Text style={styles.subtitle}>Sign in to continue to Nexus</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              <Input
                label="Email"
                placeholder="you@example.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                error={errors.email}
              />
              <Input
                label="Password"
                placeholder="Your password"
                value={password}
                onChangeText={setPassword}
                secureToggle
                error={errors.password}
              />
              <Pressable style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </Pressable>
            </View>

            {/* Actions */}
            <View style={styles.actions}>
              <Button title="Sign in" onPress={handleLogin} loading={loading} />
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or</Text>
                <View style={styles.dividerLine} />
              </View>
              <View style={styles.signupRow}>
                <Text style={styles.signupText}>
                  Don&apos;t have an account?{" "}
                </Text>
                <Pressable onPress={() => router.replace("/(auth)/signup")}>
                  <Text style={styles.signupLink}>Sign up</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  glow: {
    position: "absolute",
    top: -80,
    right: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: Colors.primary,
    opacity: 0.12,
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
  forgotPassword: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: Colors.primaryLight,
    fontSize: 14,
    fontWeight: "500",
  },
  actions: {
    gap: 16,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    color: Colors.textMuted,
    fontSize: 14,
  },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: Colors.textSecondary,
    fontSize: 15,
  },
  signupLink: {
    color: Colors.primaryLight,
    fontSize: 15,
    fontWeight: "600",
  },
});
