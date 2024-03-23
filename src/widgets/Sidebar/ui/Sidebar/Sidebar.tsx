import { type FC, useState, useMemo, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, EButtonSizes, EButtonVariants } from 'shared/ui/Button/Button';

import s from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from 'shared/ui/Stack/VStack/VStack';

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = memo((props) => {
  const { className } = props;

  const [isOpened, setIsOpened] = useState(true);

  const onButtonClick = () => {
    setIsOpened((prev) => !prev);
  };

  const sidebarItemsList = useSelector(getSidebarItems)

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} isOpened={isOpened} />
      )),
    [isOpened, sidebarItemsList]
  );

  return (
    <nav
      data-testid="sidebar"
      className={classNames(s.sidebar, { [s.opened]: isOpened }, [className])}
    >
      <VStack
        className={s.list}
        gap='8'
      >
        {itemsList}
      </VStack>

      <Button
        size={EButtonSizes.L}
        square
        variant={EButtonVariants.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={onButtonClick}
        className={s.toggleBtn}
      >
        {isOpened ? '<' : '>'}
      </Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={!isOpened} />
      </div>
    </nav>
  );
});
