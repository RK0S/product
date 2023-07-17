import { Currency, Country } from 'shared/const/common';

export const ValidateProfileErrors = {
    INCORRECT_NAME_OR_SURNAME: 'INCORRECT_NAME_OR_SURNAME',
    INCORRECT_AGE: 'INCORRECT_AGE',
    INCORRECT_NAME_CITY: 'INCORRECT_NAME_CITY',
    INCORRECT_LINK_FOR_AVATAR: 'INCORRECT_LINK_FOR_AVATAR',
    INCORRECT_USERNAME: 'INCORRECT_USERNAME',
    NO_DATA: 'NO_DATA',
    SERVER_ERROR: 'SERVER_ERROR',
} as const;

export type ValidateProfileErrorsType =
    typeof ValidateProfileErrors[keyof typeof ValidateProfileErrors];

export interface Profile {
    id?: string;
    name?: string;
    surname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileErrorsType[];
}
