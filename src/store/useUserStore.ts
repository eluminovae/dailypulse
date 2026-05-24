import { create } from "zustand";
import type { User, Theme } from "../types";
import { getSystemTheme } from "../utils/theme";
import { applyTheme } from "../utils/applyTheme";

interface UserStore {
  users: User[];
  signIn: (name: string, email: string, theme?: Theme) => void;
  changeName: (id: string, newName: string) => void;
  toggleTheme: (id: string) => void;
}

export const useUserStore = create<UserStore>(set => ({
  users: [],
  
  signIn: (name, email, theme = getSystemTheme()): void => set(state => {
    const newUser: User = {
      id: crypto.randomUUID(),
      name,
      email,
      theme,
      isLoggedIn: true
    };

    applyTheme(theme);

    return {
      users: [...state.users, newUser]
    };
  }),

  changeName: (id, newName) => set(state => ({
    users: state.users.map(user => 
      user.id === id ? { ...user, name: newName } : user
    )
  })),

  toggleTheme: (id) => set(state => {
    const currentUser = state.users.find(user => user.id === id);

    if (!currentUser) return {}; 

    const nextTheme: Theme = currentUser.theme === 'dark' ? 'light' : 'dark';

    applyTheme(nextTheme);

    return {
      users: state.users.map(user => 
        user.id === id ? { ...user, theme: nextTheme } : user
      )
    };
  })
}));