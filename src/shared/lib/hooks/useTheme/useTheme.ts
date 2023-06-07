import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeType,
    ThemeContext
} from 'app/providers/ThemeProvider';
import { useContext } from 'react';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: ThemeType;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: ThemeType;

        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.SWAMP;
                break;
            case Theme.SWAMP:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.LIGHT;
                break;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    };
};
