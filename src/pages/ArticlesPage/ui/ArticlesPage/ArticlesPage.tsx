import { type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

// import s from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';

interface IArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation('articles')

  return (
    <div className={classNames('s.ArticlesPage', {}, [className])}>
      {t('Статьи')}
    </div >
  )
};

export default ArticlesPage
