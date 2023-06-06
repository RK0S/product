import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/UI/Select/Select';
import { Country, CountryList } from 'shared/const/common';
import { memo, useMemo, useCallback } from 'react';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const countryOptions = useMemo(
        () => Object.entries(CountryList).map((val) => ({ value: val[0], content: val[1] })),
        []
    );

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            readonly={readonly}
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            label={t('Country')}
            options={countryOptions}
        />
    );
});