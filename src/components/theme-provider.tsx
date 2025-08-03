import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ 
  children, 
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (disableTransitionOnChange) {
      root.style.setProperty('--transition-duration', '0ms');
    }

    const applyTheme = (newTheme: Theme) => {
      root.classList.remove('light', 'dark');
      
      if (newTheme === 'system' && enableSystem) {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
      } else if (newTheme !== 'system') {
        root.classList.add(newTheme);
      }
      
      if (attribute === 'class') {
        root.setAttribute('data-theme', newTheme);
      }
    };

    applyTheme(theme);
    localStorage.setItem('theme', theme);

    if (disableTransitionOnChange) {
      setTimeout(() => {
        root.style.removeProperty('--transition-duration');
      }, 0);
    }
  }, [theme, attribute, enableSystem, disableTransitionOnChange]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
