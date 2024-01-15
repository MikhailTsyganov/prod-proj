import "./styles/index.scss";
import { useTheme } from "shared/hooks/theme/useTheme";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
}
