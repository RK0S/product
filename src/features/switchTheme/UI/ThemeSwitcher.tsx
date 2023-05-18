import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import Brush from 'shared/assets/icons/brush.svg';
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
            <Brush width={30} height={30} />
        </AppButton>
    );
};