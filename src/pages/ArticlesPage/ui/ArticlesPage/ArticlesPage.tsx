import s from './ArticlesPage.module.scss';
import { type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAsyncReducer } from '@/shared/lib/hooks/reducerManager/useAsyncReducer';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import { ArticlesInfinityList } from '@/widgets/Articles';

interface IArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  useAsyncReducer({ articlesPage: articlePageReducer }, { removeAfterUnmount: false })

  const { className } = props

  return (

    <div className={classNames(s.ArticlesPage, {}, [className])} >
      <ArticlesInfinityList/>
    </div >
  )
};

export default ArticlesPage
