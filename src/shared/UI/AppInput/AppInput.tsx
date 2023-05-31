import { ChangeEvent, InputHTMLAttributes, memo, RefObject, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppInput.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface AppInputProps extends HtmlInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    autofocus?: boolean;
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        autofocus,
        ...otherProps
    } = props;

    const ref: RefObject<HTMLInputElement> | null = useRef(null);
    useEffect(() => {
        let timerId: ReturnType<typeof setTimeout>;

        if (autofocus) {
            timerId = setTimeout(() => {
                ref?.current?.focus();
            }, 0);
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.input, {}, [className])}
            {...otherProps}
        />
    );
});
