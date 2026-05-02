import { Button } from "@/components/ui/Button";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="absolute -top-25 -left-25 w-96 h-96 bg-primary rounded-[200px] opacity-15" />
      <View className="absolute -bottom-40 -right-24 w-[500px] h-[500px] bg-primary-dark rounded-[250px] opacity-20" />

      <SafeAreaView
        style={styles.safeArea}
        // className="flex-1 px-6 justify-between"
        edges={["top", "bottom"]}
      >
        <View className="items-center pt-10 gap-3">
          <View className="w-18 h-18 rounded-3xl bg-primary items-center justify-center mb-2">
            <Text className="text-[32px] text-text-primary">✦</Text>
          </View>
          <Text className="text-[42px] font-extrabold text-text-primary -tracking-tight">
            Nexus
          </Text>
          <Text className="text-base text-text-secondary tracking-wide">
            Connect with your community
          </Text>
        </View>

        <View className="gap-6 py-10">
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
        <View className="gap-3 pb-4">
          <Button
            title="Create an account"
            onPress={() => router.push("/(auth)/signup")}
          />
          <Button
            title="I already have an account"
            variant="ghost"
            onPress={() => router.push("/(auth)/login")}
          />
          <Text className="text-center text-text-muted text-xs leading-[18px] mt-2 will-change-variable">
            By continuing you agree to our{" "}
            <Text className="text-primary-light font-medium">
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text className="text-primary-light font-medium">
              Privacy Policy
            </Text>
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
    <View className="flex-row items-center gap-4">
      <View className="w-13 h-13 rounded-2xl bg-surface-light items-center justify-center border border-border">
        <Text className="text-2xl">{icon}</Text>
      </View>
      <View className="flex-1 gap-1">
        <Text className="text-base font-semibold text-text-primary">
          {title}
        </Text>
        <Text className="text-sm text-text-secondary leading-5 will-change-variable">
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
});
