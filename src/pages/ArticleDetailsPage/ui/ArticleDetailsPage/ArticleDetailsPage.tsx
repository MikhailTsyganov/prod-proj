import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';

interface IArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = (props) => {
  const { className, children } = props;

  const { t } = useTranslation('articles')

  return (
    <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
      {t('Детали статьи')}
    </div >
  )
};

export default ArticleDetailsPage
