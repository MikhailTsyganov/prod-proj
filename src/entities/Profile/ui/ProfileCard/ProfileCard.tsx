import { type FC } from 'react';
import { type TMods, classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ETextAlign, ETextVariant, Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { type IProfile } from '../../model/types/profile';

import s from './ProfileCard.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CountrySelect, type ECountry } from 'entities/Country';
import { CurrencySelect, type ECurrency } from 'entities/Currency';
import { HStack, VStack } from 'shared/ui/Stack';

interface IProfileCardProps {
  className?: string
  data?: IProfile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeNickname?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (currency: ECurrency) => void
  onChangeCountry?: (country: ECountry) => void
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeNickname,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <VStack
        className={classNames(s.ProfileCard, {}, [className, s.loading])}
        needMaxWidth
        justify='center'
        align='center'
      >
        <Loader />
      </VStack>
    );
  }

  if (error) {
    return (
      <VStack
        className={classNames(s.ProfileCard, {}, [className, s.error])}
        needMaxWidth
      >
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={error}
          variant={ETextVariant.ERROR}
          align={ETextAlign.CENTER}
        />
      </VStack>
    );
  }

  const mods: TMods = {
    [s.isEdit]: !readonly
  };

  return (
    <VStack
      className={classNames(s.ProfileCard, mods, [className])}
      needMaxWidth
      gap='4'
    >
      {data?.avatar && (
      <HStack needMaxWidth justify='center'>
        <Avatar src={data?.avatar} alt={data?.username} />
      </HStack>
      )}
      <Input
        data-testid='ProfileCard.firstname'
        value={data?.firstname}
        placeholder={t('Имя')}
        className={s.input}
        readonly={readonly}
        onChange={onChangeFirstname}
        />
      <Input
        data-testid='ProfileCard.lastname'
        value={data?.lastname}
        placeholder={t('Фамилия')}
        className={s.input}
        readonly={readonly}
        onChange={onChangeLastname}
        />
      <Input
        value={data?.age}
        placeholder={t('Возраст')}
        className={s.input}
        readonly={readonly}
        onChange={onChangeAge}
        />
      <Input
        value={data?.city}
        placeholder={t('Город')}
        className={s.input}
        readonly={readonly}
        onChange={onChangeCity}
        />
      <Input
        value={data?.username}
        placeholder={t('Ник')}
        className={s.input}
        readonly={readonly}
        onChange={onChangeNickname}
        />
      <Input
        value={data?.avatar}
        placeholder={t('Аватар')}
        className={s.input}
        readonly={readonly}
        onChange={onChangeAvatar}
        />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
        className={classNames(s.input, {}, [s.differntPosition])}
        />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
        className={classNames(s.input, {}, [s.differntPosition])}
        />
    </VStack>
  );
};
