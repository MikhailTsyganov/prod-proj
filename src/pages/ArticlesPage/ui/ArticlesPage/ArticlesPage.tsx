import { type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

// import s from './ArticlesPage.module.scss';
// import { useTranslation } from 'react-i18next';
import { ArticleList, EArticleView } from 'entities/Article';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPage';
import { ArticlesViewSwitcher } from 'features/ArticlesViewSwitcher';

interface IArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  useAsyncReducer({ articlesPage: articlePageReducer })

  const { className } = props
  const dispatch = useAppDispatch()

  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)

  // const { t } = useTranslation('articles')



  useInitialEffect(() => {
    dispatch(fetchArticlesList())
  })

  const onChangeView = useCallback(
    (newView: EArticleView) => {
      dispatch(articlePageActions.setView(newView))
    },
    [dispatch],
  )

  return (
    <div className={classNames('s.ArticlesPage', {}, [className])}>
      <ArticlesViewSwitcher view={view} onChangeView={onChangeView} />
      <ArticleList
        isLoading={isLoading}
        articles={articles}
        view={view}
      />
    </div >
  )
};

export default ArticlesPage
