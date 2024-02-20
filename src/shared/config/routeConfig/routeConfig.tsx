import { MainPageLazy } from 'pages/MainPage';
import { AboutPageLazy } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';
import { ProfilePageLazy } from 'pages/ProfilePage';

export type TAppRoutesProps = RouteProps & {
  authOnly?: boolean
};

export enum ERoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const routePaths: Record<ERoutes, string> = {
  [ERoutes.MAIN]: '/',
  [ERoutes.ABOUT]: '/about',
  [ERoutes.PROFILE]: '/profile',
  [ERoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<ERoutes, TAppRoutesProps> = {
  [ERoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPageLazy />
  },
  [ERoutes.ABOUT]: {
    path: routePaths.about,
    element: <AboutPageLazy />
  },
  [ERoutes.PROFILE]: {
    path: routePaths.profile,
    element: <ProfilePageLazy />,
    authOnly: true
  },
  [ERoutes.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <NotFoundPage />
  }
};
