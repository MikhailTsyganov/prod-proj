import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';

import s from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface IProfileCardProps {
  className?: string
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  return (
    <div className={classNames(s.ProfileCard, {}, [className])}>
      <div className={s.header}>
        <Text title={t('Профиль')} />
        <Button
          variant={EButtonVariants.OUTLINED}
          className={s.editBtn}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={s.data}>
        <Input
          value={data?.firstname}
          placeholder={t('Имя')}
          className={s.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Фамилия')}
          className={s.input}
        />
      </div>
    </div>
  )
};
