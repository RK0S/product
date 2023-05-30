import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntries = [StateSchemaKey, Reducer];

export const useDynamicModuleLoader = (reducers: ReducersList, removeAfterUnmount?: boolean) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object
            .entries(reducers)
            .forEach(([name, reducer]: ReducersListEntries) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            });

        return () => {
            if (removeAfterUnmount) {
                Object  
                    .entries(reducers)    
                    .forEach(([name, reducer]: ReducersListEntries) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
