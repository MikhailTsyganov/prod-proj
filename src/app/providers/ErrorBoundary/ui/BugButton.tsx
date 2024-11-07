import { useState, type FC, useEffect } from 'react';

import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

// компонент для тестирования
export const BugButton: FC = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const onThrowError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrowError}>{t('Пробросить ошибку')}</Button>;
};
