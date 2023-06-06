import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('return loginForm', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: ['NO_DATA', 'INCORRECT_AGE']
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(['NO_DATA', 'INCORRECT_AGE']);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
