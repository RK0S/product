import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Home from 'shared/assets/icons/main_page.svg';
import List from 'shared/assets/icons/about_page.svg';
import Profile from 'shared/assets/icons/profile.svg';
import Articles from 'shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Main',
                Icon: Home
            },
            {
                path: RoutePath.about,
                text: 'About',
                Icon: List
            }
        ];
        if (userData) {
            SidebarItemList.push({
                path: RoutePath.profile + userData.id,
                text: 'Profile',
                Icon: Profile,
                authOnly: true
            },
            {
                path: RoutePath.articles,
                text: 'Articles',
                Icon: Articles,
                authOnly: true
            },
            {
                path: RoutePath.article_create,
                text: 'Create article',
                Icon: Articles,
                authOnly: true
            },);
        }
        return SidebarItemList;
    }
);
