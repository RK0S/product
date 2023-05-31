import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

type ThemeButton = 'outlined' | 'filled' | 'white' | 'primary'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = memo((props) => {
    const { className, children, theme = 'primary', disabled, ...otherProps } = props;

    return (
        <button 
            {...otherProps}
            disabled={disabled}
            className={classNames(cls.appButton, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
});