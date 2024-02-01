import { type FC, type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface IInputProps extends HtmlInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  placeholder?: string
  autofocus?: boolean
}

// eslint-disable-next-line
export const Input: FC<IInputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const [caretPosition, setCaretPosition] = useState(0);

  const inputEl = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length)
  }

  const onSelect = (e: any) => {
    // eslint-disable-next-line
    setCaretPosition(e.target.selectionStart || 0)
  }

  useEffect(() => {
    autofocus && inputEl.current.focus();
  }, [autofocus])

  return (
    <div className={classNames(s.InputWrapper, {}, [className])}>
      {placeholder &&
        <div className={s.placeholder}>
          {`${placeholder}>`}
        </div>}

      <div className={s.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          onSelect={onSelect}
          className={s.input}
          ref={inputEl}
          {...otherProps}
        />
        <span className={s.caret} style={{ left: `${caretPosition * 8.8}px` }}></span>
      </div>
    </div>
  )
});