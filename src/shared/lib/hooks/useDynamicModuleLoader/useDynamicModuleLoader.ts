import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};


export const useDynamicModuleLoader = (reducers: ReducersList, removeAfterUnmount = true) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;
    
    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object
            .entries(reducers)
            .forEach(([name, reducer]) => {
                const mounted = mountedReducers[name as StateSchemaKey];
                if (!mounted) {
                    store.reducerManager.add(name as StateSchemaKey, reducer);
                    dispatch({ type: `@INIT ${name} reducer` });
                }
            });

        return () => {
            if (removeAfterUnmount) {
                Object  
                    .entries(reducers)    
                    .forEach(([name, reducer]) => {
                        store.reducerManager.remove(name as StateSchemaKey);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    });
            }
        };
    }, [dispatch, reducers, store.reducerManager, removeAfterUnmount]);
};
