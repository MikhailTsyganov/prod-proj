import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDIspatch';
import { isMobile } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

export const ArticlePageGreeting = memo((props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [isArticlesPageWasOpened, dispatch]);

  const text = (
    <Text
      title={t('Добро пожаловать на страницу статей')}
      text={t(
        'Здесь вы можете искать и просматривать статьи на различные темы',
      )}
    />
  );

  if (isMobile) {
    return (
      <Drawer
        lazy
        isOpened={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {text}
      </Drawer>
    );
  }

  return (
    <Modal
      lazy
      isOpened={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      {text}
    </Modal>
  );
});
