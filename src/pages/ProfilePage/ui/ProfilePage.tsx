import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { type FC, memo, useEffect } from 'react';

import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch()

  useAsyncReducer({ profile: profileReducer })

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <div>
      <ProfileCard />
    </div>
  )
});

export default ProfilePage;
