import s from './ArticleDetailsPage.module.scss';
import { useCallback, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList, EArticleView } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { type TReducerList, useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { getArticleDetailsComment } from '../../model/slice/AricleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddNewCommentLazy } from 'features/AddNewComment';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Page } from 'widgets/Page/Page';
import { getArticleDetailsRecommendations } from '../../model/slice/AricleDetailsRecommendationsSlice';
import { getArticleDetailsRecommendationsIsLoading } from '../../model/selectors/recommendations/recommendations';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'widgets/ArticleDetails/ArticleRecommendationsList';
import { ArticleComments } from 'widgets/ArticleDetails/ArticleComments/ui/ArticleComments';

interface IArticleDetailsPageProps {
  className?: string
}

const reducersList: TReducerList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = (props) => {
  useAsyncReducer(reducersList)

  const { className } = props;
  const dispatch = useAppDispatch()

  const { id } = useParams()
  const { t } = useTranslation('articles')

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
      <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div >
    )
  }

  return (
    <Page className={classNames(s.ArticleDetailsPage, {}, [className])}>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />

      <ArticleRecommendationsList
        className={s.recommendations}
      />

      <ArticleComments
        articleId={id}
      />
    </Page >
  )
};

export default ArticleDetailsPage
