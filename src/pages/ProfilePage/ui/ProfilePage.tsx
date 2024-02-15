import {
  ProfileCard,
  fetchProfileData,
  getProfileReadonly,
  profileActions,
  profileReducer,
  getProfileIsLoading,
  getProfileError
} from 'entities/Profile';

import { type FC, memo, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileCurrentDataForm } from 'entities/Profile/model/selectors/getProfileCurrentDataForm/getProfileCurrentDataForm';
import { type ECountry } from 'entities/Country';
import { type ECurrency } from 'entities/Currency';

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch();

  const currentDataForm = useSelector(getProfileCurrentDataForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useAsyncReducer({ profile: profileReducer });

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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
    <div>
      <ProfilePageHeader />
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
    </div>
  );
});

export default ProfilePage;
