import MainIcon from 'shared/assets/icons/mainPage.svg';
import AboutIcon from 'shared/assets/icons/aboutPage.svg';
import ProfileIcon from 'shared/assets/icons/profilePage.svg';
import ArticlesIcon from 'shared/assets/icons/doc.svg';
import { type ISidebarItem } from '../types/SidebarItem.types';
import { routePaths } from 'shared/config/routeConfig/routeConfig';

export const SidebarItemsList: ISidebarItem[] = [
  {
    path: routePaths.main,
    text: 'Главная страница',
    Icon: MainIcon
  },
  {
    path: routePaths.about,
    text: 'О сайте',
    Icon: AboutIcon
  },
  {
    path: routePaths.profile,
    text: 'Страница профиля',
    Icon: ProfileIcon,
    authOnly: true
  },
  {
    path: routePaths.articles,
    text: 'Статьи',
    Icon: ArticlesIcon,
    authOnly: true
  }
];
