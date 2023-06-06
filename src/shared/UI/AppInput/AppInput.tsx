import { ChangeEvent, InputHTMLAttributes, memo, RefObject, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppInput.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'size'>;

type Size = 'default' | 'small'

interface AppInputProps extends HtmlInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    autofocus?: boolean;
    readonly?: boolean;
    size?: Size;
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        autofocus,
        readonly,
        size = 'default',
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
            className={classNames(cls.input, {[cls.readonly]: readonly}, [className, cls[size]])}
            readOnly={readonly}
            {...otherProps}
        />
    );
});
