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

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';

// export const routePaths: Record<ERoutes, string> = {
//   [ERoutes.MAIN]: getRouteMain(),
//   [ERoutes.ABOUT]: getRouteAbout(),
//   [ERoutes.PROFILE]: getRouteProfile(':id'),
//   [ERoutes.ARTICLES]: getRouteArticles(),
//   [ERoutes.ARTICLE_DETAILS]: getRouteArticleDetails(':id'),
//   [ERoutes.ARTICLE_CREATE]: getRouteArticleCreate(),
//   [ERoutes.ARTICLE_EDIT]: getRouteArticleEdit(':id'),
//   [ERoutes.ADMIN_PANEL]: getRouteAdminPanel(),
//   [ERoutes.FORBIDDEN]: getRouteForbidden(),
//   // last
//   [ERoutes.NOT_FOUND]: getRouteNotFound()
// };
