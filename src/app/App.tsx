import { Suspense } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "pages/AboutPage";
import { MainPageLazy } from "pages/MainPage";
import { useTheme } from "shared/hooks/theme/useTheme";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";

export default function App() {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toogleTheme}>TOGGLE</button>
    </div>
  );
}
