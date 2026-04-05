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
