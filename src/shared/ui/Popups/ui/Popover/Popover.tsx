import { Popover as HeadlessPopover } from '@headlessui/react';
import s from './Popover.module.scss';
import baseCls from '../../styles/popup.module.scss'
import { memo, type ReactNode } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { type TPopupDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

interface IPopoverProps {
  className?: string
  trigger: ReactNode
  direction?: TPopupDirection
  children: ReactNode
}

export const Popover = memo((props: IPopoverProps) => {
  const { className, trigger, direction = 'bottom right', children } = props;

  const optionClasses = [mapDirectionClass[direction]]

  return (
    <HeadlessPopover className={classNames(s.Popover, {}, [baseCls.popup, className])}>
      <HeadlessPopover.Button className={baseCls.trigger}>{trigger}</HeadlessPopover.Button>

      <HeadlessPopover.Panel className={classNames(s.panel, {}, optionClasses) }>
        {children}
      </HeadlessPopover.Panel>
    </HeadlessPopover>
  )
});
