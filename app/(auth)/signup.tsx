import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Colors } from "@/constants/colors";
import { verifyEmail, verifyUsername } from "@/libs/validations";
import { useAuthStore } from "@/store/authStore";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignupScreen() {
  const [form, setForm] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const setUser = useAuthStore((state) => state.setUser);

  const updateForm = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    // Clear error on change
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.username) {
      newErrors.username = "Username is required";
    } else if (form.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (verifyUsername(form.username)) {
      newErrors.username = "Username cannot contain spaces";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (verifyEmail(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {

    if (!validate()) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // this in place of db-call later 

      setUser(
        {
          id: "1",
          email: form.email,
          username: form.username,
          bio: "",
          avatarUrl: null,
        },
        "cghjhfhhkjkgjhhjbhj.jhggfffghhh.ijhj",
      );
    } catch (error) {
      setErrors({ email: "Something went wrong. Please try again."});
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
      
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
            {/* header */}
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
              <Text style={styles.title}>Create account</Text>
              <Text style={styles.subtitle}>
                Join thousands of people on Nexus
              </Text>
            </View>

            {/* form */}
            <View style={styles.form}>
              <Input
                label="Username"
                placeholder="yourname"
                value={form.username}
                onChangeText={(v) => updateForm("username", v)}
                error={errors.username}
                autoCapitalize="none"
              />
              <Input
                label="Email"
                placeholder="you@example.com"
                value={form.email}
                onChangeText={(v) => updateForm("email", v)}
                keyboardType="email-address"
                error={errors.email}
              />
              <Input
                label="Password"
                placeholder="Min. 6 characters"
                value={form.password}
                onChangeText={(v) => updateForm("password", v)}
                secureToggle
                error={errors.password}
              />
              <Input
                label="Confirm Password"
                placeholder="Repeat your password"
                value={form.confirmPassword}
                onChangeText={(v) => updateForm("confirmPassword", v)}
                secureToggle
                error={errors.confirmPassword}
              />
            </View>

            {/* actions section */}
            <View style={styles.actions}>
              
              <Button
                title="Create account"
                onPress={handleSignup}
                loading={loading}
              />

              <View style={styles.loginRow}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <Pressable onPress={() => router.replace("/(auth)/login")}>
                  <Text style={styles.loginLink}>Sign in</Text>
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
