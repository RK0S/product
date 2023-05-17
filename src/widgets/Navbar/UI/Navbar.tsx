import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/UI/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'}>{t('Main')}</AppLink>
                <AppLink to={'/about'}>{t('About')}</AppLink>
            </div>
        </div>
    );
};
