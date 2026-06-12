import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';

// Define the possible theme colors
type Theme = 'pink' | 'sky' | 'yellow';

const THEMES: Theme[] = [`pink`, `sky`, `yellow`];

// Define the context types
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Reads the theme resolved by the inline color-roll script in Layout.astro
 * (which sets data-theme on <html> before first paint). Falls back to pink
 * during SSR or if the script didn't run.
 */
const readDocumentTheme = (): Theme => {
  if (typeof document !== `undefined`) {
    const t = document.documentElement.dataset.theme as Theme | undefined;
    if (t && THEMES.includes(t)) return t;
  }
  return `pink`;
};

// Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // SSR renders pink; the real theme is synced from <html data-theme> after
  // mount so server and client markup match (no hydration mismatch).
  const [theme, setTheme] = useState<Theme>(`pink`);

  useEffect(() => {
    setTheme(readDocumentTheme());
  }, []);

  // Update the theme in state and keep the <html> class/data attribute in
  // sync so CSS variables (--theme-color etc.) follow along.
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof document !== `undefined`) {
      const el = document.documentElement;
      el.classList.remove(`theme-pink`, `theme-sky`, `theme-yellow`);
      el.classList.add(`theme-${newTheme}`);
      el.dataset.theme = newTheme;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return context;
};
