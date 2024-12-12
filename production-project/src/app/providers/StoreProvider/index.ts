import { createReduxStore, AppDispatch } from 'app/providers/StoreProvider/config/store';
import { StoreProvider } from './ui/SrtoreProvider';
import type { StateSchema, ReduxStoreWithReducerManager } from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithReducerManager,
    AppDispatch
};
