import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';

import s from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<INotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation()

  return (
    <div className={classNames(s.notfoundpage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  )
};