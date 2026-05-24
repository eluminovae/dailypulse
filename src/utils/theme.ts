import type { Theme } from "../types";

export const getSystemTheme = (): Theme => {
  if (typeof window !== undefined && window.matchMedia) {
    return window.matchMedia('(prefens-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return 'light';
}