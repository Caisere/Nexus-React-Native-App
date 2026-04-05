import { Post } from "@/components/feed/post-card";
import { MOCK_POSTS } from "@/constants/data";
import { create } from "zustand";

interface FeedStore {
  posts: Post[];
  addPost: (content: string, username: string, handle: string) => void;
  toggleLike: (id: string) => void;
}

export const useFeedStore = create<FeedStore>((set) => ({
  posts: MOCK_POSTS,
  addPost: (content, username, handle) => {
    set((state) => ({
      posts: [
        {
          id: Date.now().toString(),
          username,
          handle,
          avatarEmoji: "✦",
          content,
          likes: 0,
          comments: 0,
          timestamp: new Date().toISOString(),
          liked: false,
        },
        ...state.posts,
      ],
    }));
  },
  toggleLike: (id) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes + 1 : post.likes - 1,
            }
          : post,
      ),
    }));
  },
}));
