import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const { className, title, text, theme = TextTheme.PRIMARY } = props;

    return (
        <div className={classNames(cls.text, {}, [className, cls[theme]])}>
            {title && <h1 className={cls.title} >{title}</h1>}
            {text && <p className={cls.text} >{text}</p>}
        </div>
    );
};