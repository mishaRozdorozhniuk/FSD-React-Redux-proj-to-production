import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getLoginError} from "./getLoginError";

describe('getLoginError.test', () => {
    it('should render error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "error"
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual("error");
    });
    test('should render empty string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: ""
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual("");
    });
    test('should render undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
