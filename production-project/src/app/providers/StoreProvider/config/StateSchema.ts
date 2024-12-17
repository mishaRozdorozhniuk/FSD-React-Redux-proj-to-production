import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";

export interface StateSchema {
    user: UserSchema,

    // Async reducers
    loginForm?: LoginSchema,
    profile?: ProfileSchema
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

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate: (to: string, options?: any) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg
}
