import { useState, useEffect } from 'react';
import { Theme } from '@mui/material/styles';
import { styles, StylesType } from '@styles/index';
import { createTheme } from '@mui/material/styles';

const adaptStylesToMuiTheme = (styles: StylesType, isDarkMode: boolean) => {
  return createTheme({
    shape: {
      borderRadius: parseInt(styles.borderRadius.primary, 10)
    },
    zIndex: {
      mobileStepper: styles.zIndexes.xs,
      speedDial: styles.zIndexes.sm,
      appBar: styles.zIndexes.md,
      drawer: styles.zIndexes.xl,
      modal: styles.zIndexes.xxl,
      snackbar: styles.zIndexes.negative,
      tooltip: styles.zIndexes.sm
    },
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: styles.colors.alpha
      },
      secondary: {
        main: styles.colors.beta
      },
      text: {
        primary: styles.colors.text,
        secondary: styles.colors.contrast_text
      },
      background: {
        default: styles.colors.background
      }
    },
    typography: {
      h1: {
        color: styles.colors.text
      },
      h2: {
        color: styles.colors.text
      },
      h3: {
        color: styles.colors.text
      },
      body1: {
        color: styles.colors.text
      },
      body2: {
        color: styles.colors.text
      },
      caption: {
        color: styles.colors.contrast_text
      },
      subtitle1: {
        color: styles.colors.text
      }
    }
  });
};

export const useThemeContext = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [muiTheme, setMuiTheme] = useState<Theme>(
    adaptStylesToMuiTheme(styles.lightThemeStyles, false)
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isSavedThemeDark = savedTheme === 'dark';

    if (isSavedThemeDark) {
      setIsDarkMode(true);
      setMuiTheme(
        adaptStylesToMuiTheme(styles.darkThemeStyles, isSavedThemeDark)
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode
      ? styles.darkThemeStyles
      : styles.lightThemeStyles;
    setMuiTheme(adaptStylesToMuiTheme(newTheme, !isDarkMode));
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');

    setIsDarkMode(!isDarkMode);
  };

  return {
    toggleTheme,
    muiTheme,
    isDarkMode,
    styledComponentsTheme: isDarkMode
      ? styles.darkThemeStyles
      : styles.lightThemeStyles
  };
};
