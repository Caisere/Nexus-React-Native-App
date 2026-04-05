import { Button } from "@/components/ui/Button";
import { Colors } from "@/constants/colors";
import { useAuthStore } from "@/store/authStore";
import { useFeedStore } from "@/store/feedStore";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {

  const { user, logout } = useAuthStore();
  const {posts} = useFeedStore();

  const userPosts = posts.filter(
    (post) => post.handle === user?.username.toLowerCase(),
  );

  const stats = [
    { label: "Posts", value: userPosts.length },
    { label: "Followers", value: 248 },
    { label: "Following", value: 91 },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Profile</Text>
            <Pressable style={styles.settingsButton}>
              <Text style={styles.settingsIcon}>⚙️</Text>
            </Pressable>
          </View>

          {/* Profile Info */}
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>✦</Text>
              </View>
              <View style={styles.onlineDot} />
            </View>

            <Text style={styles.username}>{user?.username}</Text>
            <Text style={styles.handle}>@{user?.username.toLowerCase()}</Text>

            {user?.bio ? (
              <Text style={styles.bio}>{user.bio}</Text>
            ) : (
              <Text style={styles.bioEmpty}>No bio yet</Text>
            )}

            {/* Stats */}
            <View style={styles.statsRow}>
              {stats.map((stat) => (
                <View key={stat.label} style={styles.statItem}>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              ))}
            </View>

            {/* Edit Profile Button */}
            <Button title="Edit Profile" variant="outline" onPress={() => {}} />
          </View>

          {/* Divider */}
          <View style={styles.divider}>
            <Text style={styles.dividerLabel}>Your Posts</Text>
          </View>

          {/* User Posts */}
          {userPosts.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>✦</Text>
              <Text style={styles.emptyTitle}>No posts yet</Text>
              <Text style={styles.emptySubtitle}>
                Share something with your community
              </Text>
            </View>
          ) : (
            <View style={styles.postsList}>
              {userPosts.map((post) => (
                <View key={post.id} style={styles.postItem}>
                  <Text style={styles.postContent}>{post.content}</Text>
                  <View style={styles.postMeta}>
                    <Text style={styles.postTimestamp}>{post.timestamp}</Text>
                    <View style={styles.postStats}>
                      <Text style={styles.postStatText}>🤍 {post.likes}</Text>
                      <Text style={styles.postStatText}>
                        💬 {post.comments}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Logout */}
          <View style={styles.logoutSection}>
            <Button title="Sign out" variant="destructive" onPress={logout} />
          </View>
        </ScrollView>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  settingsIcon: {
    fontSize: 18,
  },
  profileSection: {
    alignItems: "center",
    padding: 24,
    gap: 12,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 4,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: Colors.primaryLight,
  },
  avatarText: {
    fontSize: 36,
    color: Colors.textPrimary,
  },
  onlineDot: {
    position: "absolute",
    bottom: 4,
    right: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.success,
    borderWidth: 2,
    borderColor: Colors.background,
  },
  username: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  handle: {
    fontSize: 15,
    color: Colors.textMuted,
  },
  bio: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 24,
  },
  bioEmpty: {
    fontSize: 15,
    color: Colors.textMuted,
    fontStyle: "italic",
  },
  statsRow: {
    flexDirection: "row",
    gap: 32,
    paddingVertical: 8,
  },
  statItem: {
    alignItems: "center",
    gap: 4,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.textPrimary,
  },
  statLabel: {
    fontSize: 13,
    color: Colors.textMuted,
    fontWeight: "500",
  },
  divider: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  dividerLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 60,
    gap: 12,
  },
  emptyIcon: {
    fontSize: 40,
    color: Colors.textMuted,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.textSecondary,
  },
  emptySubtitle: {
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: "center",
  },
  postsList: {
    padding: 16,
    gap: 12,
  },
  postItem: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  postContent: {
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  postMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postTimestamp: {
    fontSize: 13,
    color: Colors.textMuted,
  },
  postStats: {
    flexDirection: "row",
    gap: 16,
  },
  postStatText: {
    fontSize: 13,
    color: Colors.textMuted,
  },
  logoutSection: {
    padding: 24,
    paddingBottom: 40,
  },
});
