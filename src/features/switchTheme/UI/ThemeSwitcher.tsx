import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import Theme from 'shared/assets/icons/theme.svg';
import { AppButton } from 'shared/UI/AppButton/AppButton';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { toggleTheme } = useTheme();

    return (
        <AppButton 
            onClick={toggleTheme} 
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            <Theme fill='#FDFDFD' width={30} height={30} />
        </AppButton>
    );
};