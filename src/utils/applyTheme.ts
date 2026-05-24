import type { Theme } from "../types"

export const applyTheme = (theme: Theme): void => {
  const root = window.document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
    return
  }

  root.classList.remove('dark');
}