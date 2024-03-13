import s from './ArticleDetailsPage.module.scss';
import { useCallback, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList, EArticleView } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { TReducerList, useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { getArticleDetailsComment } from '../../model/slice/AricleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddNewCommentLazy } from 'features/AddNewComment';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { getArticleDetailsRecommendations } from '../../model/slice/AricleDetailsRecommendationsSlice';
import { getArticleDetailsRecommendationsIsLoading } from '../../model/selectors/recommendations/recommendations';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';

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
  const navigate = useNavigate()
  const { id } = useParams()
  const { t } = useTranslation('articles')

  if (!id) {
    return (
      <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div >
    )
  }

  const comments = useSelector(getArticleDetailsComment.selectAll)
  const recommendations = useSelector(getArticleDetailsRecommendations.selectAll)
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading)


  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  const onBackToList = useCallback(
    () => {
      navigate(routePaths.articles)
    },
    [navigate],
  )

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
  })

  return (
    <Page className={classNames(s.ArticleDetailsPage, {}, [className])}>
      <Button variant={EButtonVariants.OUTLINED} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      <ArticleDetails id={id} />
      {recommendations.length > 0 && (
        <Text
          size={ETextSize.L}
          title={t('Рекомендуем')}
          className={s.recommendationsTitle}
        />
      )}
      <ArticleList
        view={EArticleView.TILE}
        articles={recommendations}
        isLoading={recommendationsIsLoading}
        className={s.recommendations}
        target='_blank'
      />
      <Text
        size={ETextSize.L}
        title={t('Комментарии')}
        className={s.commentTitle}
      />
      <AddNewCommentLazy
        onSendComment={onSendComment}
      />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </Page >
  )
};

export default ArticleDetailsPage
