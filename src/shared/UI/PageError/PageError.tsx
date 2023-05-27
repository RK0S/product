import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/UI/AppButton/AppButton';

import cls from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [])}>
            <p className={cls.descr}>{t('Something went wrong')}</p>
            <AppButton theme={'outlined'} onClick={reloadPage}>{t('Reload page')}</AppButton>
        </div>
    );
};