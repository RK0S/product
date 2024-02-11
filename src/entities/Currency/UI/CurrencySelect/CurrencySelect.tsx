import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { CurrencyList, Currency } from 'shared/const/common';
import { memo, useMemo, useCallback } from 'react';
import { Select, SelectOption } from 'shared/UI/Select/Select';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const countryOptions = useMemo<SelectOption<Currency>[]>(
        () => Object.entries(CurrencyList).map((val) => ({ value: val[1], content: val[0] })),
        []
    );

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange]
    );

    return (
        <Select<Currency>
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            label={t('Currency')}
            options={countryOptions}
        />
    );
});
