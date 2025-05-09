import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

// Define the possible theme colors
type Theme = 'pink' | 'sky' | 'yellow';

// Define the context types
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Fetch the stored theme or generate a random theme if none exists
  const getStoredTheme = () => {
    const storedTheme = sessionStorage.getItem(`colorTheme`);
    if (storedTheme) {
      return storedTheme as Theme;
    } else {
      const randomTheme = [`pink`, `sky`, `yellow`][
        Math.floor(Math.random() * 3)
      ];
      sessionStorage.setItem(`colorTheme`, randomTheme);
      return randomTheme;
    }
  };

  // Set the theme immediately on load from sessionStorage
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  // Update the theme in both state and sessionStorage
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    sessionStorage.setItem(`colorTheme`, newTheme);
  };

  useEffect(() => {
    // Apply the theme class to the root element once the theme is set
    document.documentElement.classList.remove(
      `theme-pink`,
      `theme-sky`,
      `theme-yellow`,
    );
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

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
