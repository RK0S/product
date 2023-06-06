import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    const data = {
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
                data: data
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});