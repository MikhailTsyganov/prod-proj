import { ProfileCard, fetchProfileData, getProfileReadonly, profileActions, profileReducer, getProfileIsLoading, getProfileError, getProfileData } from 'entities/Profile';

import { type FC, memo, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch()

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)

  useAsyncReducer({ profile: profileReducer })

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ firstname: value || '' }))
    },
    [dispatch]
  )

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ lastname: value || '' }))
    },
    [dispatch]
  )

  return (
    <div>
      <ProfilePageHeader />
      <ProfileCard
        data={data}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
      />
    </div>
  )
});

export default ProfilePage;
