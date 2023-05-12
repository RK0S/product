import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/UI/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'}>Главная</AppLink>
                <AppLink to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
