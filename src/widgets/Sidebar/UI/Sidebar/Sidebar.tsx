import { classNames } from 'shared/lib/classNames/classNames';
import { useState, memo, useCallback } from 'react';
import { ThemeSwitcher } from 'features/switchTheme';
import { LangSwitcher } from 'features/switchLanguage';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import { getSidebarItems } from './../../model/selectors/getSidebarItems';
import { VStack } from 'shared/UI/Stack';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const SidebarItemList = useSelector(getSidebarItems);
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    return (
        <section
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
            data-testid='sidebar'
        >
            <AppButton
                data-testid='sidebar_btn'
                onClick={onToggle}
                theme={'white'}
                className={cls.collapsing_btn}
            >
                {collapsed ? '>' : '<'}
            </AppButton>
            <VStack role={'navigation'} gap='8' className={cls.links}>
                {SidebarItemList.map((item) => (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher isCollapsed={collapsed} className={cls.lang_switcher} />
            </div>
        </section>
    );
});
