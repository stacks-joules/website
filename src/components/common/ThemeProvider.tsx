import React, { createContext, useState, useContext, ReactNode } from 'react';

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
