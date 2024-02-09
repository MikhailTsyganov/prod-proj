import { type FC, useState, useMemo, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, EButtonSizes, EButtonVariants } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/data/items';

import s from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = memo((props) => {
  const { className } = props;

  const [isOpened, setIsOpened] = useState(true);

  const onButtonClick = () => {
    setIsOpened((prev) => !prev);
  };

  const itemsList = useMemo(() => SidebarItemsList.map(
    item =>
      <SidebarItem
        key={item.path}
        item={item}
        isOpened={isOpened}
      />
  ), [isOpened])

  return (
    <div data-testid='sidebar' className={classNames(s.sidebar, { [s.opened]: isOpened }, [className])}>
      <ul className={s.list}>
        {itemsList}
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
        <LangSwitcher className={s.lang} short={!isOpened} />
      </div>
    </div>
  );
});
