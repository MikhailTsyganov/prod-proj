import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Button, EButtonVariants } from "../Button/Button";
import { useTranslation } from "react-i18next";

import s from "./LangSwitcher.module.scss";

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { className, children } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      variant={EButtonVariants.TRANSPARENT}
      className={classNames(s.langswitcher, {}, [className])}
      onClick={toggle}>
      {t("Язык")}
    </Button>
  );
};
