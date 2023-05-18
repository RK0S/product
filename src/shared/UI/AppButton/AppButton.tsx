import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum ThemeButton {
    OUTLINED = 'outlined'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const AppButton: React.FC<AppButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button 
            {...otherProps}
            className={classNames(cls.appButton, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};