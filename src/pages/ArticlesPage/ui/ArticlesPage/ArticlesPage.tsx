import { type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

// import s from './ArticlesPage.module.scss';
// import { useTranslation } from 'react-i18next';
import { ArticleList, EArticleView } from 'entities/Article';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPage';
import { ArticlesViewSwitcher } from 'features/ArticlesViewSwitcher';
import { Page } from 'shared/ui/Page/Page';
import { fetchArticlesNextPage } from '../../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface IArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  useAsyncReducer({ articlesPage: articlePageReducer }, { removeAfterUnmount: false })

  const { className } = props
  const dispatch = useAppDispatch()

  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)


  // const { t } = useTranslation('articles')

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchArticlesNextPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  const onChangeView = useCallback(
    (newView: EArticleView) => {
      dispatch(articlePageActions.setView(newView))
    },
    [dispatch],
  )

  return (
    <Page className={classNames('s.ArticlesPage', {}, [className])} onScrollEnd={onLoadNextPage}>
      <ArticlesViewSwitcher view={view} onChangeView={onChangeView} />
      <ArticleList
        isLoading={isLoading}
        articles={articles}
        view={view}
      />
    </Page >
  )
};

export default ArticlesPage
