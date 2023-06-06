import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/UI/Select/Select';
import { CurrencyList, Currency } from 'shared/const/common';
import { memo, useMemo, useCallback } from 'react';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const countryOptions = useMemo(
        () => Object.entries(CurrencyList).map((val) => ({ value: val[0], content: val[1] })),
        []
    );

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            label={t('Currency')}
            options={countryOptions}
        />
    );
});
