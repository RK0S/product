import { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from './../../model/slice/loginSlice';
import { loginByUsername } from './../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/UI/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginUsername } from './../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from './../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from './../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from './../../model/selectors/getLoginError/getLoginError';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = (props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation('loginForm');
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);
        dispatch({type: '@INIT loginform reducer'});
        
        return () => {
            store.reducerManager.remove('loginForm');
            dispatch({type: '@DESTROY loginform reducer'});
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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