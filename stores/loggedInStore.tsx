'use client';
import { create } from 'zustand';

type LoggedInStore = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

export const useIsLoggedInStore = create<LoggedInStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),
}));
