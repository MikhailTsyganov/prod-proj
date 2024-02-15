import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { ECountry } from '../model/types/country';
import { useTranslation } from 'react-i18next';

interface ICountrySelectProps {
  className?: string
  value?: ECountry
  onChange?: (currency: ECountry) => void
  readonly?: boolean
}

const list = [
  { value: ECountry.Armenia, content: ECountry.Armenia },
  { value: ECountry.Belarus, content: ECountry.Belarus },
  { value: ECountry.Kazakhstan, content: ECountry.Kazakhstan },
  { value: ECountry.Russia, content: ECountry.Russia },
  { value: ECountry.Ukraine, content: ECountry.Ukraine }
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
    <Select
      className={classNames('', {}, [className])}
      title={t('Страна')}
      list={list}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
