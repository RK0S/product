import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/switchTheme';
import { LangSwitcher } from 'features/switchLanguage';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/UI/AppButton/AppButton';
import { AppLink } from 'shared/UI/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Home from 'shared/assets/icons/main_page.svg';
import List from 'shared/assets/icons/about_page.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
            data-testid='sidebar'
        >
            <AppButton
                data-testid='sidebar_btn'
                onClick={onToggle}
                theme={ThemeButton.WHITE}
                className={cls.collapsing_btn}
            >
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={cls.links}>
                <AppLink className={cls.link} to={RoutePath.main}>
                    <Home fill='#FDFDFD' />
                    {Boolean(!collapsed) && <span>{t('Main')}</span>}
                </AppLink>
                <AppLink className={cls.link} to={RoutePath.about}>
                    <List fill='#FDFDFD' />
                    {Boolean(!collapsed) && <span>{t('About')}</span>}
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher isCollapsed={collapsed} className={cls.lang_switcher} />
            </div>
        </div>
    );
};
