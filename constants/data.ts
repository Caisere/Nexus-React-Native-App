import { Post } from "@/components/feed/post-card";

export const MOCK_POSTS: Post[] = [
  {
    id: "1",
    username: "Sarah Chen",
    handle: "sarahchen",
    avatarEmoji: "👩‍💻",
    content:
      "Just shipped a new feature after 3 days of debugging. The bug was a missing semicolon. I am not okay. 😭",
    likes: 142,
    comments: 38,
    timestamp: "2m ago",
    liked: false,
  },
  {
    id: "2",
    username: "Marcus Webb",
    handle: "marcuswebb",
    avatarEmoji: "🧑‍🎨",
    content:
      "Design tip: whitespace is not empty space. It is breathing room for your user's eyes. Stop filling every pixel. Less is always more.",
    likes: 89,
    comments: 14,
    timestamp: "15m ago",
    liked: false,
  },
  {
    id: "3",
    username: "Aisha Okonkwo",
    handle: "aishaokonkwo",
    avatarEmoji: "👩‍🚀",
    content:
      "Hot take: the best code is the code you delete. Spent today removing 400 lines of unused logic. App is faster, team is happier. Ship less, not more.",
    likes: 231,
    comments: 67,
    timestamp: "1h ago",
    liked: true,
  },
  {
    id: "4",
    username: "Dev Patel",
    handle: "devpatel",
    avatarEmoji: "🧑‍💼",
    content:
      "Reminder that your side project does not need to be a startup. It can just be a thing you made because you wanted to make it. That is enough.",
    likes: 519,
    comments: 92,
    timestamp: "3h ago",
    liked: false,
  },
  {
    id: "5",
    username: "Luna Park",
    handle: "lunapark",
    avatarEmoji: "👩‍🎤",
    content:
      "Year 1 of learning to code: everything is impossible.\nYear 2: everything is hard.\nYear 3: everything is googleable.\nYear 4: you are the google result.",
    likes: 1204,
    comments: 188,
    timestamp: "5h ago",
    liked: false,
  },
];

export interface Notification {
  id: string;
  type: "like" | "follow" | "comment" | "mention";
  avatarEmoji: string;
  username: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "like",
    avatarEmoji: "👩‍💻",
    username: "sarahchen",
    message: "liked your post",
    timestamp: "2m ago",
    read: false,
  },
  {
    id: "2",
    type: "follow",
    avatarEmoji: "🧑‍🎨",
    username: "marcuswebb",
    message: "started following you",
    timestamp: "15m ago",
    read: false,
  },
  {
    id: "3",
    type: "comment",
    avatarEmoji: "👩‍🚀",
    username: "aishaokonkwo",
    message: "commented on your post",
    timestamp: "1h ago",
    read: true,
  },
  {
    id: "4",
    type: "mention",
    avatarEmoji: "🧑‍💼",
    username: "devpatel",
    message: "mentioned you in a post",
    timestamp: "3h ago",
    read: true,
  },
  {
    id: "5",
    type: "like",
    avatarEmoji: "👩‍🎤",
    username: "lunapark",
    message: "liked your post",
    timestamp: "5h ago",
    read: true,
  },
];

export const TYPE_ICONS: Record<Notification["type"], string> = {
  like: "❤️",
  follow: "👤",
  comment: "💬",
  mention: "✦",
};

export interface Person {
  id: string;
  username: string;
  handle: string;
  avatarEmoji: string;
  bio: string;
  followers: number;
  following: boolean;
}

export const SUGGESTED_PEOPLE: Person[] = [
  {
    id: "1",
    username: "Sarah Chen",
    handle: "sarahchen",
    avatarEmoji: "👩‍💻",
    bio: "Building the future one commit at a time",
    followers: 4821,
    following: false,
  },
  {
    id: "2",
    username: "Marcus Webb",
    handle: "marcuswebb",
    avatarEmoji: "🧑‍🎨",
    bio: "Design is how it works, not just how it looks",
    followers: 2934,
    following: true,
  },
  {
    id: "3",
    username: "Aisha Okonkwo",
    handle: "aishaokonkwo",
    avatarEmoji: "👩‍🚀",
    bio: "Shipping fast, breaking things, fixing them faster",
    followers: 9102,
    following: false,
  },
  {
    id: "4",
    username: "Dev Patel",
    handle: "devpatel",
    avatarEmoji: "🧑‍💼",
    bio: "Founder. Builder. Coffee dependent.",
    followers: 3456,
    following: false,
  },
  {
    id: "5",
    username: "Luna Park",
    handle: "lunapark",
    avatarEmoji: "👩‍🎤",
    bio: "Year 4 of learning to code. I am the google result now.",
    followers: 12043,
    following: true,
  },
  {
    id: "6",
    username: "James Osei",
    handle: "jamesosei",
    avatarEmoji: "🧑‍🔬",
    bio: "ML engineer. Making machines think so I don't have to.",
    followers: 6789,
    following: false,
  },
];