import { Card, ECardVariant } from '@/shared/ui/Card';
import { type INotification } from '../../model/types/notifications';
import s from './NotificationListItem.module.scss';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text } from '@/shared/ui/Text';

interface INotificationListItemProps {
  className?: string;
  item: INotification;
}

export const NotificationListItem = memo(
  (props: INotificationListItemProps) => {
    const { className, item } = props;
    const { title, description, href } = item;

    const content = (
      <Card
        variant={ECardVariant.OUTLINED}
        title={title}
        className={classNames(s.NotificationListItem, {}, [className])}
      >
        <Text title={title} text={description} />
      </Card>
    );

    if (href) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={s.link}>
          {content}
        </a>
      );
    }

    return content;
  },
);
