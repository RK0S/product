import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, validateProfileData, ValidateProfileErrors, ValidateProfileErrorsType } from 'entities/Profile';
import { getProfileForm } from './../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrorsType[]>>(
    'editProfileCard/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState} = thunkApi;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    }
);