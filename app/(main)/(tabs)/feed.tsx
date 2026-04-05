import { PostCard } from "@/components/feed/post-card";
import { Colors } from "@/constants/colors";
import { useAuthStore } from "@/store/authStore";
import { useFeedStore } from "@/store/feedStore";
import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");

  const user = useAuthStore((state) => state.user);
  const { posts, toggleLike, addPost } = useFeedStore();

  const handlePost = () => {
    if (!newPostContent.trim() || !user) return;
    addPost(newPostContent.trim(), user.username, user.username.toLowerCase());
    setNewPostContent("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Nexus</Text>
            <Text style={styles.headerSubtitle}>What&apos;s happening</Text>
          </View>
          <Pressable
            style={styles.notificationButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.notificationIcon}>✦</Text>
          </Pressable>
        </View>

        {/* Feed */}
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PostCard post={item} onLike={toggleLike} />
          )}
          contentContainerStyle={styles.feedContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={
            /* Compose box */
            <Pressable
              style={styles.composeBox}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.composeAvatar}>
                <Text style={styles.composeAvatarText}>✦</Text>
              </View>
              <Text style={styles.composePlaceholder}>
                What&apos;s on your mind?
              </Text>
              <View style={styles.composeButton}>
                <Text style={styles.composeButtonText}>Post</Text>
              </View>
            </Pressable>
          }
        />
      </SafeAreaView>

      {/* New Post Modal */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCancel}>Cancel</Text>
              </Pressable>
              <Text style={styles.modalTitle}>New Post</Text>
              <Pressable
                style={[
                  styles.modalPostButton,
                  !newPostContent.trim() && styles.modalPostButtonDisabled,
                ]}
                onPress={handlePost}
                disabled={!newPostContent.trim()}
              >
                <Text style={styles.modalPostButtonText}>Post</Text>
              </Pressable>
            </View>

            {/* Compose area */}
            <View style={styles.composeArea}>
              <View style={styles.modalAvatar}>
                <Text style={styles.modalAvatarText}>✦</Text>
              </View>
              <View style={styles.composeInputWrapper}>
                <Text style={styles.composeUsername}>{user?.username}</Text>
                <TextInput
                  style={styles.composeInput}
                  placeholder="What's happening?"
                  placeholderTextColor={Colors.textMuted}
                  value={newPostContent}
                  onChangeText={setNewPostContent}
                  multiline
                  autoFocus
                  maxLength={280}
                />
                <Text style={styles.charCount}>
                  {280 - newPostContent.length}
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Floating Action Button */}
      <Pressable style={styles.fab} onPress={() => setModalVisible(true)}>
        <Text style={styles.fabIcon}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    position: 'relative'
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
  headerSubtitle: {
    fontSize: 13,
    color: Colors.textMuted,
    marginTop: 2,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  notificationIcon: {
    fontSize: 18,
    color: Colors.primaryLight,
  },
  feedContent: {
    padding: 16,
    paddingBottom: 100,
  },
  separator: {
    height: 12,
  },
  composeBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 12,
  },
  composeAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  composeAvatarText: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  composePlaceholder: {
    flex: 1,
    color: Colors.textMuted,
    fontSize: 15,
  },
  composeButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  composeButtonText: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  modalCancel: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  modalTitle: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  modalPostButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  modalPostButtonDisabled: {
    opacity: 0.4,
  },
  modalPostButtonText: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: "700",
  },
  composeArea: {
    flexDirection: "row",
    gap: 12,
    paddingTop: 16,
  },
  modalAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  modalAvatarText: {
    fontSize: 20,
    color: Colors.textPrimary,
  },
  composeInputWrapper: {
    flex: 1,
    gap: 8,
  },
  composeUsername: {
    color: Colors.textPrimary,
    fontSize: 15,
    fontWeight: "700",
  },
  composeInput: {
    color: Colors.textPrimary,
    fontSize: 16,
    lineHeight: 24,
    minHeight: 120,
    textAlignVertical: "top",
  },
  charCount: {
    color: Colors.textMuted,
    fontSize: 13,
    alignSelf: "flex-end",
  },
  fab: {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 28,
    color: Colors.textPrimary,
    fontWeight: "300",
  },
});
