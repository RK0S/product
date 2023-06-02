import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from './../../model/slice/loginSlice';
import { loginByUsername } from './../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/UI/Text/Text';
import { getLoginState } from './../../model/selectors/getLoginState/getLoginState';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './LoginForm.module.scss';


export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
};

const LoginForm = (props: LoginFormProps) => {
    const { className, onSuccess } = props;

    const { t } = useTranslation('loginForm');
    const dispatch = useAppDispatch();
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

    const onLoginClick = useCallback( async () => {
        const action = await dispatch(loginByUsername({ username, password }));
        if (action.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <div data-testid='loginform' className={classNames(cls.loginForm, {}, [className])}>
            <AppInput
                autofocus
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
                data-testid='name'
            />
            <AppInput
                placeholder={t('Password')}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
                data-testid='password'
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
                data-testid='fetching_btn'
            >
                {t('Log in', { ns: 'translation'})}
            </AppButton>
        </div>
    );
};

export default LoginForm;