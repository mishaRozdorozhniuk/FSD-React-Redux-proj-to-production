import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userAction} from "entities/User";
import {USER_LOCAL_STORAGE_KEY} from "shared/const/localstorage";
import {ThunkConfig} from "app/providers/StoreProvider";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData: LoginByUsernameProps, {dispatch, extra, rejectWithValue}) => {
        try {
            const response = await extra.api.post<User>("/login", authData);

            if(!response.data) {
                return rejectWithValue('Invalid credentials');
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userAction.setAuthData(response.data));

            extra.navigate('/');

            return response.data
        }
        catch (error) {
            return rejectWithValue("You enter wrong password or username");
        }
    }
);
