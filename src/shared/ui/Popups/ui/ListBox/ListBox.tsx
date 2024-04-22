import s from './ListBox.module.scss';
import baseCls from '../../styles/popup.module.scss'
import { memo, Fragment, type ReactNode } from 'react';
import { Listbox } from '@headlessui/react'
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from '../../../Button/Button';
import { type TPopupDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

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
  dropdownDirection?: TPopupDirection
  label?: string
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
      className={classNames(s.ListBox, {}, [baseCls.popup, className])}
	>
      <Listbox.Button as={'div'} className={baseCls.trigger}>
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
              <li className={classNames(s.listItem, { [baseCls.active]: active, [baseCls.disabled]: disabled }, [])}>
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
