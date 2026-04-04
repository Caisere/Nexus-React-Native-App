import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  id: string;
  email: string;
  username: string;
  bio: string;
  avatarUrl: string | null;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
  setUser: (user: User, token: string) => void;
  setHydrated: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isHydrated: false,

      setUser: (user, token) =>
        set({
          user,
          token,
          isAuthenticated: true,
        }),

      setHydrated: () => set({ isHydrated: true }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      //
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
