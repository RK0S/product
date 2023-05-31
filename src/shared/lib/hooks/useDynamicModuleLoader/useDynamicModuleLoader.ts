import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};


export const useDynamicModuleLoader = (reducers: ReducersList, removeAfterUnmount?: boolean) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object
            .entries(reducers)
            .forEach(([name, reducer]) => {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
