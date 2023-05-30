import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeType,
    ThemeContext,
} from 'app/providers/ThemeProvider';
import { useContext } from 'react';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: ThemeType;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};