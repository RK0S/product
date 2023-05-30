import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Home from 'shared/assets/icons/main_page.svg';
import List from 'shared/assets/icons/about_page.svg';
import Profile from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main',
        Icon: Home
    },
    {
        path: RoutePath.about,
        text: 'About',
        Icon: List
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: Profile
    },
];