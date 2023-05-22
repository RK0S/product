import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/UI/AppButton/AppButton';
import cls from './LoginForm.module.scss';
import { AppInput } from 'shared/UI/AppInput/AppInput';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <AppInput autofocus placeholder={t('Username')} className={cls.input} />
            <AppInput placeholder={t('Password')} className={cls.input} />
            <AppButton className={cls.btn} theme={ThemeButton.FILLED}>{t('Log in')}</AppButton>
        </div>
    );
};