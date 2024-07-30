import { type FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ECurrency } from '../model/types/currency';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';

interface ICurrencySelectProps {
  className?: string
  value?: ECurrency
  onChange?: (currency: ECurrency) => void
  readonly?: boolean
}

const list = [
  { id: ECurrency.RUB, content: ECurrency.RUB },
  { id: ECurrency.USD, content: ECurrency.USD },
  { id: ECurrency.EUR, content: ECurrency.EUR }
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
    <ListBox
      className={classNames('', {}, [className])}
      defaultValue={t('Валюта')}
      items={list}
      value={value}
      onChange={onChangeHandler}
      disabled={readonly}
      dropdownDirection='top right'
      label={t('Валюта')}
    />
  );
});
