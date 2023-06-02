import { useState, useCallback, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from 'features/authByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './Navbar.module.scss';


interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onOpen = useCallback(() => {
        setIsOpened(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpened(false);
    }, []);

    const onLogout = useCallback(() => {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div data-testid='navbar' className={classNames(cls.navbar, {}, [className])}>
                <AppButton onClick={onLogout} theme={'outlined'}>
                    {t('Log out')}
                </AppButton>
            </div>
        );
    }

    return (
        <div data-testid='navbar' className={classNames(cls.navbar, {}, [className])}>
            <AppButton onClick={onOpen} theme={'outlined'}>
                {t('Log in')}
            </AppButton>
            <LoginModal onClose={onClose} isOpened={isOpened} />
        </div>
    );
});
