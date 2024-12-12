import { Provider } from 'react-redux';
import React from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: StateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>

}

export const StoreProvider: React.FC<StoreProviderProps> = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
