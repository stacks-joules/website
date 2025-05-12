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
  // Local state to store the theme
  const [theme, setTheme] = useState<Theme>(`pink`); // Default to 'pink'

  useEffect(() => {
    // This useEffect will run after the component is mounted
    // Ensure that we are only using sessionStorage on the client side
    const storedTheme = sessionStorage.getItem(`colorTheme`);
    if (storedTheme) {
      setTheme(storedTheme as Theme); // If the theme is found in sessionStorage, use it
    } else {
      // If no theme is found in sessionStorage, generate a random theme and save it to sessionStorage
      const themeOptions: Theme[] = [`pink`, `sky`, `yellow`];
      const randomTheme =
        themeOptions[Math.floor(Math.random() * themeOptions.length)];
      sessionStorage.setItem(`colorTheme`, randomTheme); // Save the random theme to sessionStorage
      setTheme(randomTheme); // Set the random theme in state
    }
  }, []); // Empty dependency array means this effect will run only once when the component mounts

  useEffect(() => {
    // This effect applies the theme class to the root element (html) whenever the theme changes
    document.documentElement.classList.remove(
      `theme-pink`,
      `theme-sky`,
      `theme-yellow`,
    );
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]); // Runs every time the theme changes

  // Update the theme in both state and sessionStorage
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    sessionStorage.setItem(`colorTheme`, newTheme); // Save the new theme to sessionStorage
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
