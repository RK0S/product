import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/loginSlice';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || initialState.username;