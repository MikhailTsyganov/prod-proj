import s from './Tabs.module.scss';
import { type ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card, ECardVariant } from '../Card/Card';

export interface ITabItem {
  value: string;
  content: ReactNode;
}

interface ITabsProps {
  className?: string;
  tabList: ITabItem[];
  currentValue?: string;
  onTabClick?: (tab: ITabItem) => void;
}

export const Tabs = memo((props: ITabsProps) => {
  const { className, tabList, currentValue, onTabClick } = props;

  const tabHandler = useCallback(
    (tab: ITabItem) => () => {
      onTabClick?.(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(s.Tabs, {}, [className])}>
      {tabList.map((tab) => (
        <Card
          variant={
            tab.value === currentValue
              ? ECardVariant.FILLED
              : ECardVariant.OUTLINED
          }
          onClick={tabHandler(tab)}
          className={classNames(s.tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
