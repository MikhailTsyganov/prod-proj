import {
  fetchProfileData
  , EditableProfileCard
} from '@/widgets/Profile';

import { type FC, memo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDIspatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';

const ProfilePage: FC = memo(() => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>()

  useInitialEffect(() => {
    id && dispatch(fetchProfileData(id));
  })

  return (
    <Page data-testid='ProfilePage'>
      <VStack gap='16' needMaxWidth>
        <ProfilePageHeader />
        <EditableProfileCard />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
