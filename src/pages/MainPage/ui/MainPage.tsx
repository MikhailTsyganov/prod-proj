import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <BugButton />
      {t('Главная страница')}
      <div>dawdaeffdsf</div>
      <div>dawdaeffdsf</div>
      <HStack>
        <div>fsep</div>
        <ListBox/>
      </HStack>
      <div>dawdaeffdsf</div>
      <div>dawdaeffdsf</div>
      <div>dawdaeffdsf</div>
      <div>dawdaeffdsf</div>
    </Page>
  );
})

export default MainPage;
