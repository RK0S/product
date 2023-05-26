import { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ThemeButton } from 'shared/UI/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { LoginModal } from 'features/authByUsername';
import { getUserAuthData, userActions } from 'entities/User';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onOpen = () => {
        setIsOpened(true);
    };

    const onClose = () => {
        setIsOpened(false);
    };

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <AppButton onClick={onLogout} theme={ThemeButton.OUTLINED}>
                    {t('Log out')}
                </AppButton>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppButton onClick={onOpen} theme={ThemeButton.OUTLINED}>
                {t('Log in')}
            </AppButton>
            <LoginModal onClose={onClose} isOpened={isOpened} />
        </div>
    );
};
