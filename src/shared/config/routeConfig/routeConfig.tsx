import { MainPageLazy } from '@/pages/MainPage';
import { AboutPageLazy } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';
import { ProfilePageLazy } from '@/pages/ProfilePage';
import { ArticlesPageLazy } from '@/pages/ArticlesPage';
import { ArticleDetailsPageLazy } from '@/pages/ArticleDetailsPage';
import { ArticleEditPageLazy } from '@/pages/ArticleEditPage';
import { AdminPanelPageLazy } from '@/pages/AdminPanelPage';
import { EUserRoles } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export type TAppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: EUserRoles[]
};

export enum ERoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found',
}

export const routePaths: Record<ERoutes, string> = {
  [ERoutes.MAIN]: '/',
  [ERoutes.ABOUT]: '/about',
  [ERoutes.PROFILE]: '/profile/', // +:id
  [ERoutes.ARTICLES]: '/articles',
  [ERoutes.ARTICLE_DETAILS]: '/articles/', // +:id
  [ERoutes.ARTICLE_CREATE]: '/articles/new',
  [ERoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [ERoutes.ADMIN_PANEL]: '/admin',
  [ERoutes.FORBIDDEN]: '/forbidden',
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
  [ERoutes.ARTICLE_CREATE]: {
    path: routePaths.article_create,
    element: <ArticleEditPageLazy />,
    authOnly: true
  },
  [ERoutes.ARTICLE_EDIT]: {
    path: routePaths.article_edit,
    element: <ArticleEditPageLazy />,
    authOnly: true
  },
  [ERoutes.ADMIN_PANEL]: {
    path: routePaths.admin_panel,
    element: <AdminPanelPageLazy />,
    authOnly: true,
    roles: [EUserRoles.ADMIN, EUserRoles.MANAGER]
  },
  [ERoutes.FORBIDDEN]: {
    path: routePaths.forbidden,
    element: <ForbiddenPage />
  },
  // last
  [ERoutes.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <NotFoundPage />
  }
};
