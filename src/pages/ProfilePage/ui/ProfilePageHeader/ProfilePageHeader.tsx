import { type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './ProfilePageHeader.module.scss';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData
} from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';

interface IProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEfit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(s.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly
        ? (
          <Button
            variant={EButtonVariants.OUTLINED}
            className={s.editBtn}
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>)
        : (
          <>
            <Button
              variant={EButtonVariants.OUTLINED_RED}
              className={s.editBtn}
              onClick={onCancelEdit}
            >
              {t('Отменить')}
            </Button>
            <Button
              variant={EButtonVariants.OUTLINED}
              className={s.saveBtn}
              onClick={onSave}
            >
              {t('Сохранить')}
            </Button>
          </>)}
    </div>
  );
};
