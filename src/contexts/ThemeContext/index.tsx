import React, { createContext } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { useThemeContext } from './useThemeContext';

type ThemeContextProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {}
});

type ThemeProviderProps = { children: React.ReactNode };

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { toggleTheme, isDarkMode, styledComponentsTheme, muiTheme } =
    useThemeContext();

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={styledComponentsTheme}>
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
