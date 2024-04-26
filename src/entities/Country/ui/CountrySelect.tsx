import { type FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ECountry } from '../model/types/country';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';

interface ICountrySelectProps {
  className?: string
  value?: ECountry
  onChange?: (currency: ECountry) => void
  readonly?: boolean
}

const list = [
  { id: ECountry.Armenia, content: ECountry.Armenia },
  { id: ECountry.Belarus, content: ECountry.Belarus },
  { id: ECountry.Kazakhstan, content: ECountry.Kazakhstan },
  { id: ECountry.Russia, content: ECountry.Russia },
  { id: ECountry.Ukraine, content: ECountry.Ukraine }
];

export const CountrySelect: FC<ICountrySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as ECountry);
    },
    [onChange]
  );

  return (
    <ListBox
      className={classNames('', {}, [className])}
      defaultValue={t('Страна')}
      items={list}
      value={value}
      onChange={onChangeHandler}
      disabled={readonly}
      dropdownDirection='top right'
      label={t('Страна')}
    />
  );
});
