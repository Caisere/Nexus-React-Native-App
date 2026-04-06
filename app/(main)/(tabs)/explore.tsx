import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/colors";
import { Person, SUGGESTED_PEOPLE } from "@/constants/data";


export default function ExploreScreen() {
  const [search, setSearch] = useState("");
  const [people, setPeople] = useState<Person[]>(SUGGESTED_PEOPLE);

  const filtered = people.filter(
    (p) =>
      p.username.toLowerCase().includes(search.toLowerCase()) ||
      p.handle.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleFollow = (id: string) => {
    setPeople((people) =>
      people.map((person) =>
        person.id === id
          ? {
              ...person,
              following: !person.following,
              followers: person.following ? person.followers - 1 : person.followers + 1,
            }
          : person,
      ),
    );
  };

  const formatFollowers = (count: number): string => {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Explore</Text>
          <Text style={styles.headerSubtitle}>Discover people to follow</Text>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search people..."
              placeholderTextColor={Colors.textMuted}
              value={search}
              onChangeText={setSearch}
              autoCapitalize="none"
            />
            {search.length > 0 && (
              <Pressable onPress={() => setSearch("")}>
                <Text style={styles.clearIcon}>✕</Text>
              </Pressable>
            )}
          </View>
        </View>

        {/* People List */}
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>🔍</Text>
              <Text style={styles.emptyTitle}>No results found</Text>
              <Text style={styles.emptySubtitle}>
                Try searching for a different name
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.personCard}>
              {/* Avatar */}
              <View style={styles.avatar}>
                <Text style={styles.avatarEmoji}>{item.avatarEmoji}</Text>
              </View>

              {/* Info */}
              <View style={styles.personInfo}>
                <Text style={styles.personName}>{item.username}</Text>
                <Text style={styles.personHandle}>@{item.handle}</Text>
                <Text style={styles.personBio} numberOfLines={1}>
                  {item.bio}
                </Text>
                <Text style={styles.followerCount}>
                  {formatFollowers(item.followers)} followers
                </Text>
              </View>

              {/* Follow Button */}
              <Pressable
                style={[
                  styles.followButton,
                  item.following && styles.followingButton,
                ]}
                onPress={() => toggleFollow(item.id)}
              >
                <Text
                  style={[
                    styles.followButtonText,
                    item.following && styles.followingButtonText,
                  ]}
                >
                  {item.following ? "Following" : "Follow"}
                </Text>
              </Pressable>
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
  headerSubtitle: {
    fontSize: 13,
    color: Colors.textMuted,
    marginTop: 2,
  },
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surfaceLight,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 14,
    gap: 10,
    height: 48,
  },
  searchIcon: {
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: 15,
  },
  clearIcon: {
    color: Colors.textMuted,
    fontSize: 14,
    fontWeight: "600",
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  separator: {
    height: 12,
  },
  personCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatarEmoji: {
    fontSize: 26,
  },
  personInfo: {
    flex: 1,
    gap: 2,
  },
  personName: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  personHandle: {
    fontSize: 13,
    color: Colors.textMuted,
  },
  personBio: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  followerCount: {
    fontSize: 12,
    color: Colors.textMuted,
    marginTop: 2,
    fontWeight: "500",
  },
  followButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    minWidth: 84,
    alignItems: "center",
  },
  followingButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  followButtonText: {
    color: Colors.textPrimary,
    fontSize: 13,
    fontWeight: "700",
  },
  followingButtonText: {
    color: Colors.textSecondary,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 60,
    gap: 12,
  },
  emptyIcon: {
    fontSize: 40,
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
});
