import { type ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './Select.module.scss';

export interface ISelectList<T extends string> {
  value: T
  content: string
}

interface ISelectProps<T extends string> {
  className?: string
  title?: string
  list?: Array<ISelectList<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
  const { className, title, list, value, onChange, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const listArr = useMemo(
    () =>
      list?.map((listItem) => (
        <option
          className={s.option}
          value={listItem.value}
          key={listItem.value}
        >
          {listItem.content}
        </option>
      )),
    [list]
  );

  return (
    <div className={classNames(s.Wrapper, {}, [className])}>
      {title && <span className={s.title}>{`${title}>`}</span>}
      <select
        className={s.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {listArr}
      </select>
    </div>
  );
};
