import s from './Dropdown.module.scss';
import { Fragment, type ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Menu } from '@headlessui/react'

interface IDropdownListItem {
  id: string
  content: ReactNode
  onClick: () => void
  disabled?: boolean
  href?: string
}

interface IDropdownProps {
  className?: string
  items: IDropdownListItem[]
  trigger: ReactNode
}

export const Dropdown = memo((props: IDropdownProps) => {
  const { className, items, trigger } = props;

  return (
    <Menu as='div' className={classNames(s.dropdown, {}, [className])}>
      <Menu.Button className={s.button}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={s.list}>
        {items.map(item => (
          <Menu.Item as={Fragment} key={item.id} disabled={item.disabled}>
            {({ active }) => (
              <button
                className={classNames(s.listItem, { [s.active]: active })}
                onClick={item.onClick}
			  >
                {item.content}
              </button>
			 )}
          </Menu.Item>
        ))}

      </Menu.Items>
    </Menu>
  )
});
