import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

import s from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className, children } = props;

  const [isOpened, setIsOpened] = useState(true);

  const onButtonClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div data-testid='sidebar' className={classNames(s.sidebar, { [s.opened]: isOpened }, [className])}>
      <button 
          data-testid='sidebar-toggle' 
          onClick={onButtonClick}>
      </button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
};
