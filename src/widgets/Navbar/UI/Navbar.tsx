import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ThemeButton } from 'shared/UI/AppButton/AppButton';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';
import { LoginModal } from 'features/authByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const { t } = useTranslation();
    
    const onOpen = () => {
        setIsOpened(true);
    };

    const onClose = () => {
        setIsOpened(false);
    };

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppButton onClick={onOpen} theme={ThemeButton.OUTLINED}>{t('Log in')}</AppButton>
            <LoginModal onClose={onClose} isOpened={isOpened} />
        </div>
    );
};
