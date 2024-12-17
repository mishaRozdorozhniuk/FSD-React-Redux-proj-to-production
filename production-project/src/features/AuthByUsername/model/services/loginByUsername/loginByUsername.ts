import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userAction} from "entities/User";
import {USER_LOCAL_STORAGE_KEY} from "shared/const/localstorage";
import {ThunkConfig, ThunkExtraArg} from "app/providers/StoreProvider/config/StateSchema";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData: LoginByUsernameProps, thunkAPI) => {
        const {extra, dispatch, rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.post<User>("/login", authData);

            if(!response.data) {
                return rejectWithValue('Invalid credentials');
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userAction.setAuthData(response.data));

            return response.data
        }
        catch (error) {
            return rejectWithValue("You enter wrong password or username");
        }
    }
);
