import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'editProfileCard/fetchProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue} = thunkApi;
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);