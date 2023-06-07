import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/UI/AppLink/AppLink';
import { SidebarItemType } from './../../model/item';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

    return (
        <AppLink className={cls.link} to={item.path}>
            <item.Icon fill='#FDFDFD' />
            {Boolean(!collapsed) && <span>{t(item.text)}</span>}
        </AppLink>
    );
};
