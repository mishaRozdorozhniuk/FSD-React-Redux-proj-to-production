import {CombinedState, configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema, ThunkExtraArg} from 'app/providers/StoreProvider/config/StateSchema';
import {userReducer} from "entities/User";
import {createReducerManager} from "./reducerManager";
import {$api} from "shared/api/api";
import {NavigateOptions} from "react-router";

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers: ReducersMapObject<StateSchema>,
    navigate?: (to: any, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware(
            {
                thunk: {
                    extraArgument: extraArg
                },
            }
        )
    });

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>[`dispatch`]
