import { ProfileSchema, ValidateProfileErrors } from 'entities/Profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from './../services/updateProfileData/updateProfileData';

const data = {
    avatar: 'https://i.ytimg.com/vi/fsvTC-PONB8/hqdefault.jpg',
    age: 19,
    city: 'Moscow',
    name: 'Kid',
    surname: 'VS cat',
    username: '<3 cat'
};

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true
        });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateErrors: [
                ValidateProfileErrors.INCORRECT_AGE,
                ValidateProfileErrors.INCORRECT_NAME_CITY
            ],
            form: {},
            data
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data
        });
    });

    test('update profile form', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {}
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfileForm(data))
        ).toEqual({ form: data });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.NO_DATA]
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined
        });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
            validateErrors: [ValidateProfileErrors.NO_DATA],
            data: {}
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            data
        });
    });

    
});
