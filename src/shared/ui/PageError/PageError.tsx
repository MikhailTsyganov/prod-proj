import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';
import s from './PageError.module.scss'
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

export const PageError: FC = () => {
  const { t } = useTranslation();

  const onReloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(s.errorpage)}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={onReloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
};
