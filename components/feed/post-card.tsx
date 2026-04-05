import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";

export interface Post {
  id: string;
  username: string;
  handle: string;
  avatarEmoji: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
  liked: boolean;
}

interface PostCardProps {
  post: Post;
  onLike: (id: string) => void;
}

export function PostCard({ post, onLike }: PostCardProps) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>{post.avatarEmoji}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.handle}>
            @{post.handle} · {post.timestamp}
          </Text>
        </View>
      </View>

      {/* Content */}
      <Text style={styles.content}>{post.content}</Text>

      {/* Actions */}
      <View style={styles.actions}>
        <Pressable style={styles.actionButton} onPress={() => onLike(post.id)}>
          <Text style={styles.actionIcon}>{post.liked ? "❤️" : "🤍"}</Text>
          <Text style={[styles.actionText, post.liked && styles.likedText]}>
            {post.likes}
          </Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionText}>{post.comments}</Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Text style={styles.actionIcon}>🔁</Text>
          <Text style={styles.actionText}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatarEmoji: {
    fontSize: 22,
  },
  userInfo: {
    flex: 1,
    gap: 2,
  },
  username: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  handle: {
    fontSize: 13,
    color: Colors.textMuted,
  },
  content: {
    fontSize: 15,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  actions: {
    flexDirection: "row",
    gap: 24,
    paddingTop: 4,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  actionIcon: {
    fontSize: 16,
  },
  actionText: {
    fontSize: 14,
    color: Colors.textMuted,
    fontWeight: "500",
  },
  likedText: {
    color: "#EF4444",
  },
});
