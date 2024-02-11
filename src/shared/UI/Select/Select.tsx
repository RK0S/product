import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { typedMemo } from 'shared/types';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    onChange?: (value: T) => void;
    value?: T;
    readonly?: boolean;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const { className, label, options, onChange, value, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option className={cls.option} key={opt.value} value={opt.value}>
                {opt.content}
            </option>
        ));
    }, [options]);

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select disabled={readonly} value={value} onChange={onChangeHandler} className={cls.select}>
                {optionList}
            </select>
        </div>
    );
});
