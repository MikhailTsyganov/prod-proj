import s from './NotificationList.module.scss';
import { useGetAllNotificationsQuery } from '../../api/notificationApi';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { NotificationListItem } from '../NotificationListItem/NotificationListItem';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';

interface INotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: INotificationListProps) => {
  const { className } = props;

  const { data: notifications, isLoading } = useGetAllNotificationsQuery(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        className={classNames(s.NotificationList, {}, [className])}
      >
        <Skeleton height={80} borderRad="16px" />
        <Skeleton height={80} borderRad="16px" />
        <Skeleton height={80} borderRad="16px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      className={classNames(s.NotificationList, {}, [className])}
    >
      {notifications?.map((item) => (
        <NotificationListItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
