import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from './../../model/slice/loginSlice';
import { getLoginState } from './../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from './../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/UI/Text/Text';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation('loginForm');
    const dispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

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
