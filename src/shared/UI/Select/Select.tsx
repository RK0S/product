import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    onChange?: (value: string) => void;
    value?: string;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, onChange, value, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
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
