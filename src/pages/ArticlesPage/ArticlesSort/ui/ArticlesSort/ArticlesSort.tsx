import { ArticlesViewSwitcher } from '@/features/ArticlesViewSwitcher';
import s from './ArticlesSort.module.scss';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { type EArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDIspatch';
import { useSelector } from 'react-redux';
import { useAsyncReducer } from '@/shared/lib/hooks/reducerManager/useAsyncReducer';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useSearchParams } from 'react-router-dom';
import {
  getArticlesSortSearch,
  getArticlesSortSort,
  getArticlesSortView
} from '../../model/selectors/articlesSort';
import {
  initArticlesSort
} from '../../model/services/initArticlesSort/initArticlesSort';
import {
  articlesSortActions,
  articlesSortReducer
} from '../../model/slices/articlesSortSlice';

import {
  ArticlesSortSelects
} from '../../ui/ArticlesSortSelects/ArticlesSortSelects';

import {
  ArticlesSortTabs
} from '../../ui/ArticlesSortTabs/ArticlesSortTabs';

import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import { articlePageActions } from '../../../model/slices/articlePageSlice';

interface IArticlesSortProps {
  className?: string
}

export const ArticlesSort = memo((props: IArticlesSortProps) => {
  useAsyncReducer({ articlesPageSort: articlesSortReducer })
  const { className } = props;
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const view = useSelector(getArticlesSortView)
  const search = useSelector(getArticlesSortSearch)
  const sort = useSelector(getArticlesSortSort)
  //   const order = useSelector(getArticlesSortOrder)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  },

  // eslint-disable-next-line
  [dispatch, sort]
  )

  const deboucedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback(
    (newView: EArticleView) => {
      dispatch(articlesSortActions.setView(newView))
    },
    [dispatch]
  )

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlesSortActions.setSearch(value))
      dispatch(articlePageActions.setPage(1))
      deboucedFetchData()
    },
    [dispatch, deboucedFetchData]
  )

  useInitialEffect(() => {
    dispatch(initArticlesSort(searchParams))
  })

  return (
    <div className={classNames(s.ArticlesSort, {}, [className])}>
      <div className={s.sortWrapper}>
        <ArticlesSortSelects
          fetchData={deboucedFetchData}
				/>
        <ArticlesViewSwitcher
          view={view}
          onChangeView={onChangeView} />
      </div>
      <Card className={s.searchWrapper}>
        <Input
          placeholder={t('Поиск...')}
          onChange={onChangeSearch}
          value={search} />
      </Card>
      <ArticlesSortTabs
        fetchData={fetchData} />
    </div >
  )
})
