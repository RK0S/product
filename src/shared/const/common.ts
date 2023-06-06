export const CurrencyList = {
    RUB: 'RUB',
    EUR: 'EUR',
    USD: 'USD',
} as const;

export type Currency = typeof CurrencyList[keyof typeof CurrencyList];

export const CountryList = {
    Russia: 'Russia',
    Belarus: 'Belarus',
    Ukraine: 'Ukraine',
    Armenia: 'Armenia',
    Kazakhstan: 'Kazakhstan',
    Italy: 'Italy',
} as const;

export type Country = typeof CountryList[keyof typeof CountryList];