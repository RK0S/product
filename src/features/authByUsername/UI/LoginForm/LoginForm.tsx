import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from './../../model/slice/loginSlice';
import { loginByUsername } from './../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/UI/Text/Text';
import { getLoginState } from './../../model/selectors/getLoginState/getLoginState';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
};

const LoginForm = (props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation('loginForm');
    const dispatch = useDispatch();
    const { isLoading, password, username, error} = useSelector(getLoginState);

    useDynamicModuleLoader(initialReducers, true);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <AppInput
                autofocus
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <AppInput
                placeholder={t('Password')}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            {error && (
                <Text
                    text={t('Incorrect username or password')}
                    theme={'error'}
                    className={cls.error_message}
                />
            )}
            <AppButton
                disabled={isLoading}
                onClick={onLoginClick}
                className={cls.btn}
                theme={'filled'}
            >
                {t('Log in', { ns: 'translation'})}
            </AppButton>
        </div>
    );
};

export default LoginForm;