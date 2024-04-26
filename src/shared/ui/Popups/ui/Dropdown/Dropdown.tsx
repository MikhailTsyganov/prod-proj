import s from './Dropdown.module.scss';
import baseCls from '../../styles/popup.module.scss'
import { Fragment, type ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Menu } from '@headlessui/react'
import { AppLink } from '../../../AppLink/AppLink';
import { type TPopupDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

interface IDropdownListItem {
  id: string
  content: ReactNode
  onClick?: () => void
  disabled?: boolean
  href?: string
}

interface IDropdownProps {
  className?: string
  items: IDropdownListItem[]
  trigger: ReactNode
  dropdownDirection?: TPopupDirection
}

export const Dropdown = memo((props: IDropdownProps) => {
  const { className, items, trigger, dropdownDirection = 'bottom right' } = props;

  const optionClasses = [mapDirectionClass[dropdownDirection]]

  return (
    <Menu as='div' className={classNames(s.dropdown, {}, [baseCls.popup, className])}>
      <Menu.Button className={baseCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(s.list, {}, optionClasses) }>
        {items.map(item => {
          const { id, content, onClick, disabled, href } = item

          const contentEl = ({ active }: { active: boolean }) => (
            <button
              type='button'
              className={classNames(s.listItem, { [baseCls.active]: active })}
              onClick={onClick}
              disabled={disabled}
			          >
              {content}
            </button>
          )

          if (href) {
            return (
              <Menu.Item as={AppLink} to={href} key={id} disabled={disabled}>
                {contentEl}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} key={id} disabled={disabled}>
              {contentEl}
            </Menu.Item>
          )
        })}

      </Menu.Items>
    </Menu>
  )
});
