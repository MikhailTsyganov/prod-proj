import { profileReducer } from 'entities/Profile';
import { type FC, memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';

const ProfilePage: FC = memo((props) => {
  const { t } = useTranslation()

  useAsyncReducer({ profile: profileReducer })

  return (
    <div>
      {t('Страница профиля')}
    </div>
  )
});

export default ProfilePage;
