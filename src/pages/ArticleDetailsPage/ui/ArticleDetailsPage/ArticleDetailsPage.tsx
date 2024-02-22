import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface IArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { id } = useParams()
  const { t } = useTranslation('articles')

  if (!id) {
    return (
      <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div >
    )
  }

  return (
    <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div >
  )
};

export default ArticleDetailsPage
