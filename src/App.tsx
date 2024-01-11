import { Suspense, useContext } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { ETheme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export default function App() {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toogleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}
