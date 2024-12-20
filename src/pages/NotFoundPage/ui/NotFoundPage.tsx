import { type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';

import s from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<INotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page
      className={classNames(s.notfoundpage, {}, [className])}
      data-testid="NotFoundPage"
    >
      {t('Страница не найдена')}
    </Page>
  );
};
