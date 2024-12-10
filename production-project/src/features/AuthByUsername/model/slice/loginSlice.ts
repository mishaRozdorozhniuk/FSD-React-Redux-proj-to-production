import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "features/AuthByUsername/model/types/loginSchema";
import {loginByUsername} from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
    error: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
});

export const {actions: loginAction} = loginSlice;
export const {reducer: loginReducer} = loginSlice;
