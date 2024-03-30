import s from './ListBox.module.scss';
import { memo, Fragment, type ReactNode } from 'react';
import { Listbox } from '@headlessui/react'
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from '../Button/Button';
import { type TDropdownDirection } from 'shared/types/ui';

export interface IListBoxItem {
  id: string
  content: ReactNode
  disabled?: boolean
}

interface IListBoxProps {
  items: IListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  disabled?: boolean
  dropdownDirection?: TDropdownDirection
  label?: string
}

const mapDirectionClass: Record<TDropdownDirection, string> = {
  'top left': s.directionTopLeft,
  'top right': s.directionTopRight,
  'bottom left': s.directionBottomLeft,
  'bottom right': s.directionBottomRight
}

export const ListBox = memo((props: IListBoxProps) => {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    disabled,
    dropdownDirection = 'bottom right',
    label
  } = props

  const onChangeListBox = (val: string) => {
    onChange?.(val)
  }

  const optionClasses = [mapDirectionClass[dropdownDirection]]

  return (
    <Listbox
      disabled={disabled}
      value={value}
      onChange={onChangeListBox}
      as={'div'}
      className={classNames(s.ListBox, {}, [className])}
	>
      <Listbox.Button as={'div'}>
        {label && <span className={s.label}>{label + '>'}</span>}
        <Button disabled={disabled}>
          {value ?? defaultValue}
        </Button>
      </Listbox.Button>
      <Listbox.Options className={classNames(s.list, {}, optionClasses)}>
        {items.map((item) => (
          <Listbox.Option
            key={item.id}
            value={item.id}
            disabled={item.disabled}
            as={Fragment}
          >
            {({ active, selected, disabled }) => (
              <li className={classNames(s.listItem, { [s.active]: active, [s.disabled]: disabled }, [])}>
                {selected && '!!!'}
                {item.content}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
});
