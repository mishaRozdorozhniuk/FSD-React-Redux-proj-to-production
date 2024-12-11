import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";

export interface StateSchema {
    user: UserSchema,

    // Async reducers
    loginForm?: LoginSchema,
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
    reducerManager: {
        getReducerMap: () => Record<StateSchemaKeys, any>,
        reduce: (state: StateSchema, action: any) => any,
        add: (key: StateSchemaKeys, reducer: any) => void,
        remove: (key: StateSchemaKeys) => void,
    }
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKeys, reducer: Reducer) => void,
    remove: (key: StateSchemaKeys) => void,
}

