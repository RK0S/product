import { ReducersMapObject } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/authByUsername';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}
