import React, { useState, useContext, useCallback } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeContext, ThemeProvider as StyledProvider } from 'styled-components';

const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');
    const themeObject = themeMode === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
            <StyledProvider theme={themeObject}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    );
};

function useTheme() {
    const context = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        if (context.themeMode === 'light') {
            context.setThemeMode('dark');
        } else {
            context.setThemeMode('light');
        }
    }, [context]);

    return [context.themeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
