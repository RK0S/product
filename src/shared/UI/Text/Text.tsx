import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error'
type textAlign = 'left' | 'right' | 'center'
type size = 'large'

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    textAlign?: textAlign;
    size?: size;
}

export const Text = memo((props: TextProps) => {
    const { 
        className, 
        title, 
        text, 
        theme = 'primary', 
        textAlign = 'left',
        size
    } = props;

    return (
        <div className={classNames(cls.text, {}, [className, cls[theme], cls[textAlign], (size ? cls[size]: '')])}>
            {title && <h1 className={cls.title} >{title}</h1>}
            {text && <p className={cls.text} >{text}</p>}
        </div>
    );
});