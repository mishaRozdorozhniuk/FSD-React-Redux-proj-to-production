import React, {FC, useEffect} from 'react';
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithReducerManager} from "app/providers/StoreProvider";
import {StateSchemaKeys} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";

export type ReducersList = {
    [key in StateSchemaKeys]?: Reducer
}

type ReducersListEntry = [StateSchemaKeys, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {children, reducers, removeAfterUnmount} = props
    const store = useStore() as ReduxStoreWithReducerManager;
    const dispatch = useDispatch();

    // Asynchronously reducer registration
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name as StateSchemaKeys, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });

        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reduce]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }
        }
    }, []);


    return (
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader
