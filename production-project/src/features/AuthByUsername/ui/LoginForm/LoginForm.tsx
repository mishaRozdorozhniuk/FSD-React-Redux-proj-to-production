import React, {memo, useCallback} from 'react';
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import cls from "./LoginForm.module.scss";
import {Input} from "shared/ui/Input/input";
import {useDispatch, useSelector} from "react-redux";
import {loginAction, loginReducer} from "../../model/slice/loginSlice";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import Text, {TextTheme} from "shared/ui/Text/Text";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginLoading} from "../../model/selectors/getLoginLoading/getLoginLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import DynamicModuleLoader, {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginAction.setUsername(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginAction.setPassword(value));
    }, [dispatch])

    const onSubmit = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, username, password])

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text text="Authorization form" />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    autofocus
                    placeholder={t('Введите username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button disabled={isLoading} onClick={onSubmit} theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
