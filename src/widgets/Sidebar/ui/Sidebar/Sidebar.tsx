import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, EButtonSizes, EButtonVariants } from 'shared/ui/Button/Button';
import { AppLink, EAppLinkVariants } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/mainPage.svg';
import AboutIcon from 'shared/assets/icons/aboutPage.svg';

import s from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [isOpened, setIsOpened] = useState(true);

  const onButtonClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div data-testid='sidebar' className={classNames(s.sidebar, { [s.opened]: isOpened }, [className])}>
      <ul className={s.list}>
        <li className={s.listItem}>
          <AppLink
            to={routePaths.main}
            className={s.listLink}
          >
            <MainIcon className={s.icon}/>
            <span className={s.linkText}>{t('Главная страница')}</span>
          </AppLink>
        </li>

        <li className={s.listItem}>
          <AppLink
            to={routePaths.about}
            className={s.listLink}
          >
            <AboutIcon className={s.icon}/>
            <span className={s.linkText}>{t('О сайте')}</span>
          </AppLink>
        </li>

      </ul>

      <Button
        size={EButtonSizes.L}
        square
        variant={EButtonVariants.BACKGROUND_INVERTED}
        data-testid='sidebar-toggle'
        onClick={onButtonClick}
        className={s.toggleBtn}
      >{isOpened ? '<' : '>'}
      </Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={!isOpened}/>
      </div>
    </div>
  );
};
