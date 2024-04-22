import { NotificationList } from 'entities/Notification';
import s from './OpenNotificationListButton.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/bell.svg'

interface IOpenNotificationListButtonProps {
  className?: string
}

export const OpenNotificationListButton = memo((props: IOpenNotificationListButtonProps) => {
  const { className } = props;

  return (
    <Popover
      trigger={
        <div>
          <Icon Svg={NotificationIcon} inverted/>
        </div>
	  }
      direction='bottom left'
      className={classNames(s.OpenNotificationListButton, {}, [className])}
          >
      <NotificationList className={s.notifications}/>
    </Popover>
  )
});
