import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";

interface TabIconProps {
  icon: string;
  label: string;
  focused: boolean;
}

function TabIcon({ icon, label, focused }: TabIconProps) {
  return (
    <View style={tabStyles.container}>
      <View
        style={[tabStyles.iconWrapper, focused && tabStyles.iconWrapperFocused]}
      >
        <Text style={tabStyles.icon}>{icon}</Text>
      </View>
      <Text style={[tabStyles.label, focused && tabStyles.labelFocused]}>
        {label}
      </Text>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyles.bar,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="⚡" label="Feeds" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="🔍" label="Explore" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="🔔" label="Activity" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="👤" label="Profile" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="👍" label="Test" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const tabBarStyles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    height: 80,
    paddingBottom: 16,
  },
});

const tabStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    // paddingTop: 8,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapperFocused: {
    backgroundColor: Colors.primaryDark,
  },
  icon: {
    fontSize: 20,
  },
  label: {
    fontSize: 10,
    color: Colors.textMuted,
    fontWeight: "500",
  },
  labelFocused: {
    color: Colors.primaryLight,
  },
});
