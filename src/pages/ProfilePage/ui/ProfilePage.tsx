import {
  fetchProfileData, profileReducer
  , EditableProfileCard
} from 'widgets/Profile/EditableProfileCard';

import { type FC, memo } from 'react';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch();

  useAsyncReducer({ profile: profileReducer });

  const { id } = useParams<{ id: string }>()

  useInitialEffect(() => {
    id && dispatch(fetchProfileData(id));
  })

  return (
    <Page>
      <VStack gap='16' needMaxWidth>
        <ProfilePageHeader />
        <EditableProfileCard />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
