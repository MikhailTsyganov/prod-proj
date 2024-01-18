import { MainPageLazy } from 'pages/MainPage';
import { AboutPageLazy } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';

export enum ERoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const routePaths: Record<ERoutes, string> = {
  [ERoutes.MAIN]: '/',
  [ERoutes.ABOUT]: '/about',
  [ERoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<ERoutes, RouteProps> = {
  [ERoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPageLazy />
  },
  [ERoutes.ABOUT]: {
    path: routePaths.about,
    element: <AboutPageLazy />
  },
  [ERoutes.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <NotFoundPage />
  }
};
