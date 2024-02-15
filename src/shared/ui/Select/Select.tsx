import { type ChangeEvent, type FC, memo, useMemo } from 'react';
import { TMods, classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Select.module.scss';

export interface ISelectList {
  value: string
  content: string
}

interface ISelectProps {
  className?: string
  title?: string
  list?: ISelectList[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select: FC<ISelectProps> = memo((props) => {
  const { className, title, list, value, onChange, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
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
});
