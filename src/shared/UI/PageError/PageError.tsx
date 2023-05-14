import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/UI/AppButton/AppButton';

export const PageError = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [])}>
            <p>{t('Something went wrong')}</p>
            <AppButton onClick={reloadPage}>{t('Reload page')}</AppButton>
        </div>
    );
};