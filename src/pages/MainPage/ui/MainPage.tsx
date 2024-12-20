import { BugButton } from '@/app/providers/ErrorBoundary';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      <BugButton />
      <div>123</div>
      {t('Главная страница')}
    </Page>
  );
});

export default MainPage;
