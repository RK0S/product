import { ReducersMapObject } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema, 
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];