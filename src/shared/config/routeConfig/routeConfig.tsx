import { MainPageLazy } from 'pages/MainPage';
import { AboutPageLazy } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { ArticlesPageLazy } from 'pages/ArticlesPage';
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage';

export type TAppRoutesProps = RouteProps & {
  authOnly?: boolean
};

export enum ERoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  // last
  NOT_FOUND = 'not_found',
}

export const routePaths: Record<ERoutes, string> = {
  [ERoutes.MAIN]: '/',
  [ERoutes.ABOUT]: '/about',
  [ERoutes.PROFILE]: '/profile/', // +:id
  [ERoutes.ARTICLES]: '/articles',
  [ERoutes.ARTICLE_DETAILS]: '/articles/', // +:id
  // last
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
    path: routePaths.profile + ':id',
    element: <ProfilePageLazy />,
    authOnly: true
  },
  [ERoutes.ARTICLES]: {
    path: routePaths.articles,
    element: <ArticlesPageLazy />,
    authOnly: true
  },
  [ERoutes.ARTICLE_DETAILS]: {
    path: routePaths.article_details + ':id',
    element: <ArticleDetailsPageLazy />,
    authOnly: true
  },
  // last
  [ERoutes.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <NotFoundPage />
  }
};
