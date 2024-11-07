import { MainPageLazy } from '@/pages/MainPage';
import { AboutPageLazy } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePageLazy } from '@/pages/ProfilePage';
import { ArticlesPageLazy } from '@/pages/ArticlesPage';
import { ArticleDetailsPageLazy } from '@/pages/ArticleDetailsPage';
import { ArticleEditPageLazy } from '@/pages/ArticleEditPage';
import { AdminPanelPageLazy } from '@/pages/AdminPanelPage';
import { EUserRoles } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { TAppRoutesProps } from '@/shared/types/router';
import {
  ERoutes,
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbidden,
  getRouteMain,
  getRouteNotFound,
  getRouteProfile,
} from '@/shared/const/router';

export const routeConfig: Record<ERoutes, TAppRoutesProps> = {
  [ERoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPageLazy />,
  },
  [ERoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPageLazy />,
  },
  [ERoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  [ERoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  [ERoutes.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPageLazy />,
    authOnly: true,
  },
  [ERoutes.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  [ERoutes.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  [ERoutes.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: <AdminPanelPageLazy />,
    authOnly: true,
    roles: [EUserRoles.ADMIN, EUserRoles.MANAGER],
  },
  [ERoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  // last
  [ERoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};
