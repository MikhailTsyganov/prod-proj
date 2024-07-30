import { NotificationList } from '@/entities/Notification';
import s from './OpenNotificationListButton.module.scss';
import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Popover } from '@/shared/ui/Popups';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/bell.svg'
import { MobileView, BrowserView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

interface IOpenNotificationListButtonProps {
  className?: string
}

export const OpenNotificationListButton = memo((props: IOpenNotificationListButtonProps) => {
  const { className } = props;

  const [isOpened, setIsOpened] = useState(false)

  const trigger = (
    <div onClick={() => { setIsOpened(true); }}>
      <Icon Svg={NotificationIcon} inverted/>
    </div>
  )

  return (
    <div>
      <MobileView>
        {trigger}
        <Drawer
          isOpened={isOpened}
          onClose={() => { setIsOpened(false); }}
            >
          <NotificationList/>
        </Drawer>
      </MobileView>
      <BrowserView>
        <Popover
          trigger={trigger}
          direction={__PROJECT__ === 'storybook' ? 'bottom right' : 'bottom left'}
          className={classNames(s.OpenNotificationListButton, {}, [className])}
        >
          <NotificationList className={s.notifications} />
        </Popover>
      </BrowserView>
    </div>

  )
});
