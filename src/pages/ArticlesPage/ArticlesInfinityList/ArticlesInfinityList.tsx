import s from './ArticlesInfinityList.module.scss';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDIspatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getArticlesSortView } from '../ArticlesSort/model/selectors/articlesSort';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '../ArticleList/ArticleList';
import { getArticles } from '../model/slices/articlePageSlice';
import { getArticlesPageError, getArticlesPageIsLoading } from '../model/selectors/articlesPage';
import { fetchArticlesNextPage } from '../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';

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
