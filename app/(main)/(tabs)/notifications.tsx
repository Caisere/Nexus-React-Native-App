import { Colors } from "@/constants/colors";
import { NOTIFICATIONS, TYPE_ICONS } from "@/constants/data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function NotificationsScreen() {
  const unreadCount = NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Activity</Text>
            {unreadCount > 0 && (
              <Text style={styles.unreadCount}>
                {unreadCount} new notifications
              </Text>
            )}
          </View>
        </View>

        <FlatList
          data={NOTIFICATIONS}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
            <View style={[styles.card, !item.read && styles.unreadCard]}>
              {/* Unread indicator */}
              {!item.read && <View style={styles.unreadDot} />}

              {/* Avatar */}
              <View style={styles.avatarWrapper}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarEmoji}>{item.avatarEmoji}</Text>
                </View>
                <View style={styles.typeIcon}>
                  <Text style={styles.typeIconText}>
                    {TYPE_ICONS[item.type]}
                  </Text>
                </View>
              </View>

              {/* Content */}
              <View style={styles.content}>
                <Text style={styles.notifText}>
                  <Text style={styles.notifUsername}>@{item.username}</Text>{" "}
                  {item.message}
                </Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  unreadCount: {
    fontSize: 13,
    color: Colors.primaryLight,
    marginTop: 2,
    fontWeight: "500",
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  separator: {
    height: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 12,
  },
  unreadCard: {
    borderColor: Colors.primaryDark,
    backgroundColor: Colors.surfaceLight,
  },
  unreadDot: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatarEmoji: {
    fontSize: 24,
  },
  typeIcon: {
    position: "absolute",
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  typeIconText: {
    fontSize: 11,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  notifText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  notifUsername: {
    color: Colors.textPrimary,
    fontWeight: "700",
  },
  timestamp: {
    fontSize: 12,
    color: Colors.textMuted,
  },
});
