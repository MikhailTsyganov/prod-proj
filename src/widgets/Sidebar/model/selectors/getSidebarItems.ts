import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/mainPage.svg';
import AboutIcon from '@/shared/assets/icons/aboutPage.svg';
import ProfileIcon from '@/shared/assets/icons/profilePage.svg';
import ArticlesIcon from '@/shared/assets/icons/doc.svg';
import { type ISidebarItem } from '../types/SidebarItem.types';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
  const sidebarItemsList: ISidebarItem[] = [
    {
      path: getRouteMain(),
      text: 'Главная страница',
      Icon: MainIcon,
    },
    {
      path: getRouteAbout(),
      text: 'О сайте',
      Icon: AboutIcon,
    },
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(authData?.id),
        text: 'Страница профиля',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'Статьи',
        Icon: ArticlesIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
