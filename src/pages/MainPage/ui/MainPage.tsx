import { BugButton } from '@/app/providers/ErrorBoundary';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/features/Rating/StarRating';
import { RatingCard } from '@/widgets/Rating/RatingCard';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <BugButton />
      {t('Главная страница')}
     <RatingCard title='Как Вам статья?' hasFeedBack/>
    </Page>
  );
})

export default MainPage;
