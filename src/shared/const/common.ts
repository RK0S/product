const Currency = {
    RUB: 'RUB',
    EUR: 'EUR',
    USD: 'USD',
} as const;

export type Currency = typeof Currency[keyof typeof Currency];

const Country = {
    Russia: 'Russia',
    Belarus: 'Belarus',
    Ukraine: 'Ukraine',
    Armenia: 'Armenia',
    Kazakhstan: 'Kazakhstan',
    Italy: 'Italy',
} as const;

export type Country = typeof Country[keyof typeof Country];