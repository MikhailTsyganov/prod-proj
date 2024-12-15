import s from './ArticlesPage.module.scss';
import { type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAsyncReducer } from '@/shared/lib/hooks/reducerManager/useAsyncReducer';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import { ArticlesInfinityList } from '../../ArticlesInfinityList/ArticlesInfinityList';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  useAsyncReducer(
    { articlesPage: articlePageReducer },
    { removeAfterUnmount: false },
  );

  const { className } = props;
  // const articleItem = useGetArticleItemById('2');

  return (
    <div
      className={classNames(s.ArticlesPage, {}, [className])}
      data-testid="ArticlesPage"
    >
      <ArticlesInfinityList />

      <ArticlePageGreeting />
    </div>
  );
};

export default ArticlesPage;
