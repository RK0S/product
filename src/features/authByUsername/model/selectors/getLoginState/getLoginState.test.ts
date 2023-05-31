import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('return loginForm', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
                error: 'error'
            }
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: '',
            password: '',
            isLoading: false,
            error: 'error'
        });
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual({
            username: '',
            password: '',
            isLoading: false
        });
    });
});
