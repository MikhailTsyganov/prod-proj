import { type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData
} from 'widgets/Profile/EditableProfileCard';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface IProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);
  const profileId = useSelector(getProfileData)?.id
  const userId = useSelector(getUserAuthData)?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEfit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    console.log('save');

    profileId && dispatch(updateProfileData(profileId));
  }, [dispatch, profileId]);

  if (String(profileId) !== String(userId)) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text title={t('Профиль')} />
      </div>
    )
  }

  return (
    <HStack
      className={classNames('', {}, [className])}
      justify='between'
      needMaxWidth
    >
      <Text title={t('Профиль')} />
      {readonly
        ? (
          <Button
            variant={EButtonVariants.OUTLINED}
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>)
        : (
          <HStack gap='8'>
            <Button
              variant={EButtonVariants.OUTLINED_RED}
              onClick={onCancelEdit}
            >
              {t('Отменить')}
            </Button>
            <Button
              variant={EButtonVariants.OUTLINED}
              onClick={onSave}
            >
              {t('Сохранить')}
            </Button>
          </HStack>)}
    </HStack>
  );
};
