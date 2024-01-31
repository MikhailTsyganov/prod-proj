import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation('main');

  const [value, setValue] = useState('')

  const InputHandler = (val: string) => {
    setValue(val);
  }

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
      <Input value={value} onChange={InputHandler} placeholder='Введите текст' />
    </div>
  );
}

export default MainPage;
