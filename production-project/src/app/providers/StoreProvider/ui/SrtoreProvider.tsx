import { Provider } from 'react-redux';
import React from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";

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

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
