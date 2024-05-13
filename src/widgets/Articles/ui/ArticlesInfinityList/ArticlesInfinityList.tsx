import s from './ArticlesInfinityList.module.scss';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDIspatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchArticlesNextPage } from '@/pages/ArticlesPage/model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { getArticlesPageError, getArticlesPageIsLoading } from '@/pages/ArticlesPage/model/selectors/articlesPage';
import { getArticles } from '@/pages/ArticlesPage/model/slices/articlePageSlice';
import { getArticlesSortView } from '@/features/ArticlesSort';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '@/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '../ArticleList/ArticleList';

interface IArticlesInfinityListProps {
  className?: string
}

export const ArticlesInfinityList = memo((props: IArticlesInfinityListProps) => {
  const { className } = props;
  const { t } = useTranslation('articles')

  const dispatch = useAppDispatch()

  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesSortView)
  const error = useSelector(getArticlesPageError)

  const [searchParams] = useSearchParams()

  // const { t } = useTranslation('articles')

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchArticlesNextPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  if (error) {
    return <Text title={t('Ошибка при загрузке статей')}/>
  }

  return (
    <ArticleList
      isLoading={isLoading}
      articles={articles}
      view={view}
      className={classNames(s.ArticlesInfinityList, {}, [className])}
      onScrollEnd={onLoadNextPage}
      />
  )
});
