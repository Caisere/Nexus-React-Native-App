import { Button } from "@/components/ui/Button";
import { Colors } from "@/constants/colors";
import { router } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.gradientTop} />
      <View style={styles.gradientBottom} />

      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <View style={styles.brandSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>✦</Text>
          </View>
          <Text style={styles.appName}>Nexus</Text>
          <Text style={styles.tagline}>Connect with your community</Text>
        </View>

        <View style={styles.featuresSection}>
          <FeatureItem
            icon="👥"
            title="Build your circle"
            description="Connect with people who share your interests"
          />
          <FeatureItem
            icon="💬"
            title="Real conversations"
            description="Engage deeply with your community"
          />
          <FeatureItem
            icon="✨"
            title="Discover more"
            description="Explore content curated just for you"
          />
        </View>

        {/* Bottom section — actions */}
        <View style={styles.actionsSection}>
          <Button
            title="Create an account"
            onPress={() => router.push("/(auth)/signup")}
          />
          <Button
            title="I already have an account"
            variant="ghost"
            onPress={() => router.push("/(auth)/login")}
          />
          <Text style={styles.terms}>
            By continuing you agree to our{" "}
            <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <View style={featureStyles.container}>
      <View style={featureStyles.iconContainer}>
        <Text style={featureStyles.icon}>{icon}</Text>
      </View>
      <View style={featureStyles.textContainer}>
        <Text style={featureStyles.title}>{title}</Text>
        <Text style={featureStyles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  gradientTop: {
    position: "absolute",
    top: -100,
    left: -100,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: Colors.primary,
    opacity: 0.15,
  },
  gradientBottom: {
    position: "absolute",
    bottom: -150,
    right: -100,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: Colors.primaryDark,
    opacity: 0.2,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  brandSection: {
    alignItems: "center",
    paddingTop: 40,
    gap: 12,
  },
  logoContainer: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  logoIcon: {
    fontSize: 32,
    color: Colors.textPrimary,
  },
  appName: {
    fontSize: 42,
    fontWeight: "800",
    color: Colors.textPrimary,
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 16,
    color: Colors.textSecondary,
    letterSpacing: 0.3,
  },
  featuresSection: {
    gap: 24,
    paddingVertical: 40,
  },
  actionsSection: {
    gap: 12,
    paddingBottom: 16,
  },
  terms: {
    textAlign: "center",
    color: Colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
  },
  termsLink: {
    color: Colors.primaryLight,
    fontWeight: "500",
  },
});

const featureStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: Colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
});
