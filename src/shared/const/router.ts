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
