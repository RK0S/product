import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum ThemeButton {
    OUTLINED = 'outlined',
    FILLED = 'filled',
    WHITE = 'white'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = (props) => {
    const { className, children, theme, disabled, ...otherProps } = props;

    return (
        <button 
            {...otherProps}
            disabled={disabled}
            className={classNames(cls.appButton, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};