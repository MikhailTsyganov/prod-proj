import { MainPageLazy } from "pages/MainPage";
import { AboutPageLazy } from "pages/AboutPage";
import { RouteProps } from "react-router-dom";

export enum ERoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const routePaths: Record<ERoutes, string> = {
  [ERoutes.MAIN]: "/",
  [ERoutes.ABOUT]: "/about",
};

export const routeConfig: Record<ERoutes, RouteProps> = {
  [ERoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPageLazy />,
  },
  [ERoutes.ABOUT]: {
    path: routePaths.about,
    element: <AboutPageLazy />,
  },
};
