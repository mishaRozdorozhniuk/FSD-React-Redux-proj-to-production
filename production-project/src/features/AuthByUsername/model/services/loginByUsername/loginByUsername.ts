import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, userAction} from "entities/User";
import {USER_LOCAL_STORAGE_KEY} from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUsername',
    async (authData: LoginByUsernameProps, thunkAPI) => {
        try {
            const response = await axios.post<User>("http://localhost:8000/login", authData);

            if(!response.data) {
                return thunkAPI.rejectWithValue('Invalid credentials');
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userAction.setAuthData(response.data));

            return response.data
        }
        catch (error) {
            return thunkAPI.rejectWithValue("You enter wrong password or username");
        }
    }
);
