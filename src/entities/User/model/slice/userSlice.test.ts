import { UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

const data = {
    avatar: 'https://i.ytimg.com/vi/fsvTC-PONB8/hqdefault.jpg',
    age: 19,
    city: 'Moscow',
    name: 'Kid',
    surname: 'VS cat',
    username: '<3 cat'
};

describe('userSlice.test', () => {
    test('set auth data', () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined
        };
        expect(
            userReducer(state as UserSchema, userActions.setAuthData({ id: '1', username: 'gg' }))
        ).toEqual({ authData: { id: '1', username: 'gg' } });
    });

    test('init auth data', () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined
        };
        expect(
            userReducer(state as UserSchema, userActions.initAuthData({ id: '1', username: 'gg' }))
        ).toEqual({ authData: { id: '1', username: 'gg' } });
    });

    test('logout', () => {
        const state: DeepPartial<UserSchema> = {
            authData: { id: '1', username: 'gg' }
        };
        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
            authData: undefined
        });
    });
});
