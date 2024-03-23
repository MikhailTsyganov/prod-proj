import {
  ProfileCard,
  fetchProfileData,
  getProfileReadonly,
  profileActions,
  profileReducer,
  getProfileIsLoading,
  getProfileError,
  EValidateProfileError
} from 'entities/Profile';

import { type FC, memo, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileCurrentDataForm } from 'entities/Profile/model/selectors/getProfileCurrentDataForm/getProfileCurrentDataForm';
import { type ECountry } from 'entities/Country';
import { type ECurrency } from 'entities/Currency';
import { getProfileValidateErrors } from 'entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ETextVariant, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile')

  const currentDataForm = useSelector(getProfileCurrentDataForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslates = {
    [EValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    [EValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [EValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [EValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная регион'),
    [EValidateProfileError.NO_DATA]: t('Данные не указаны')
  };

  useAsyncReducer({ profile: profileReducer });

  const { id } = useParams<{ id: string }>()

  useInitialEffect(() => {
    id && dispatch(fetchProfileData(id));
  })

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ firstname: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      if (!isNaN(Number(value))) {
        dispatch(profileActions.updateData({ age: Number(value) || 0 }));
      }
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeNickname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: ECurrency) => {
      dispatch(profileActions.updateData({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: ECountry) => {
      dispatch(profileActions.updateData({ country }));
    },
    [dispatch]
  );

  return (
    <Page>
      <VStack gap='16' needMaxWidth>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map(err => <Text text={validateErrorTranslates[err]} variant={ETextVariant.ERROR} key={err} />)}
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
      </VStack>
    </Page>
  );
});

export default ProfilePage;
