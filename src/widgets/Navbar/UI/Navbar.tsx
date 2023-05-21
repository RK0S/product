import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ThemeButton } from 'shared/UI/AppButton/AppButton';
import { Modal } from 'shared/UI/Modal/Modal';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

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
            <Modal onClose={onClose} isOpened={isOpened}><p>FGHFGHFGHFGH</p></Modal>
        </div>
    );
};
