'use client';
import { create } from 'zustand';

type LoggedInStore = {
  isLoggedin: boolean;
  setIsLoggedin: (value: boolean) => void;
};

export const useloggedInStore = create<LoggedInStore>((set) => ({
  isLoggedin: false,
  setIsLoggedin: (value) => set(() => ({ isLoggedin: value })),
}));
