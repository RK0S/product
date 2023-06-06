import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    const form = {
        avatar: 'asd',
        age: 19,
        city: 'Moscow',
        name: 'Kid',
        surname: 'VS cat',
        username: '<3 cat'
    };
    test('return loginForm', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});