import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  user: null,
  setUser: (user) => set({user}),
}));