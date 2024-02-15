import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ETextAlign, ETextVariant, Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { type IProfile } from '../../model/types/profile.types';

import s from './ProfileCard.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface IProfileCardProps {
  className?: string
  data?: IProfile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(s.ProfileCard, {}, [className, s.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(s.ProfileCard, {}, [className, s.error])}>
        <Text
          title={error}
          variant={ETextVariant.ERROR}
          align={ETextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(s.ProfileCard, {}, [className])}>
      <div className={s.data}>
        <Input
          value={data?.firstname}
          placeholder={t('Имя')}
          className={s.input}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Фамилия')}
          className={s.input}
          readonly={readonly}
          onChange={onChangeLastname}
        />
      </div>
    </div>
  )
};
