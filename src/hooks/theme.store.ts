"use client";

import { create } from "zustand";

export const THEME_KEY = "v3_theme";
export type Theme = 'light' | 'dark';

interface IThemeState {
	theme: Theme;
}

interface IThemeAction {
	setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<IThemeState & IThemeAction>((set) => ({
	theme: 'dark',
	setTheme: (theme) => set(() => {
		localStorage.setItem(THEME_KEY, theme);
		return { theme }
	}),
}));
