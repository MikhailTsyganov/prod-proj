import { EValidateProfileError, ProfileCard } from '@/entities/Profile';
import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDIspatch';
import { type ECurrency } from '@/entities/Currency';
import { type ECountry } from '@/entities/Country';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ETextVariant, Text } from '@/shared/ui/Text';
import { getProfileCurrentDataForm } from '../../model/selectors/getProfileCurrentDataForm/getProfileCurrentDataForm';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { useAsyncReducer } from '@/shared/lib/hooks/reducerManager/useAsyncReducer';

export const EditableProfileCard = memo(() => {
  useAsyncReducer({ profile: profileReducer });

  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const currentDataForm = useSelector(getProfileCurrentDataForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [EValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    [EValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [EValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [EValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная регион'),
    [EValidateProfileError.NO_DATA]: t('Данные не указаны'),
  };

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ firstname: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ lastname: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      if (!isNaN(Number(value))) {
        dispatch(profileActions.updateData({ age: Number(value) || 0 }));
      }
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ lastname: value || '' }));
    },
    [dispatch],
  );

  const onChangeNickname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ username: value || '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: ECurrency) => {
      dispatch(profileActions.updateData({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: ECountry) => {
      dispatch(profileActions.updateData({ country }));
    },
    [dispatch],
  );

  return (
    <>
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text
            data-testid="EditableProfileCard.error"
            text={validateErrorTranslates[err]}
            variant={ETextVariant.ERROR}
            key={err}
          />
        ))}

      <ProfileCard
        data={currentDataForm}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeNickname={onChangeNickname}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </>
  );
});
