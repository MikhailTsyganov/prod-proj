import s from './ListBox.module.scss';
import { memo, Fragment, useState, type ReactNode } from 'react';
import { Listbox, type _internal_ComponentListbox } from '@headlessui/react'
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from '../Button/Button';

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false }
]

export interface IListBoxItem {
  id: string
  content: ReactNode
}

interface IListBoxProps {
  items: IListBoxItem[]
  className?: string
}

export const ListBox = memo((props: IListBoxProps) => {
  const { items, className } = props

  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox
      value={selectedPerson}
      onChange={setSelectedPerson}
      as={'div'}
      className={classNames(s.Listbox, {}, [className])}
	>
      <Listbox.Button as={'div'}>
        <Button>
          {selectedPerson.name}
        </Button>
      </Listbox.Button>
      <Listbox.Options className={s.list}>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
            as={Fragment}
          >
            {({ active, selected }) => (
              <li className={classNames(s.listItem, { [s.active]: active }, [])}>
                {selected && '!!!'}
                {person.name}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
});
