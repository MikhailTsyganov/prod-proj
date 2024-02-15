import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { ECurrency } from '../model/types/currency';
import { useTranslation } from 'react-i18next';

interface ICurrencySelectProps {
  className?: string
  value?: ECurrency
  onChange?: (currency: ECurrency) => void
  readonly?: boolean
}

const list = [
  { value: ECurrency.RUB, content: ECurrency.RUB },
  { value: ECurrency.USD, content: ECurrency.USD },
  { value: ECurrency.EUR, content: ECurrency.EUR }
];

export const CurrencySelect: FC<ICurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as ECurrency);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      title={t('Валюта')}
      list={list}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
