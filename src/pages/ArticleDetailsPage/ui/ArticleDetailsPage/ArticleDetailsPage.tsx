import s from './ArticleDetailsPage.module.scss';
import { useCallback, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { ArticleDetailsCommentsReducer, getArticleDetailsComment } from '../../model/slice/AricleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddNewCommentLazy } from 'features/AddNewComment';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { Button, EButtonVariants } from 'shared/ui/Button/Button';
import { routePaths } from 'shared/config/routeConfig/routeConfig';

interface IArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = (props) => {
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
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)


  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  const onBackToList = useCallback(
    () => {
      navigate(routePaths.articles)
    },
    [navigate],
  )

  useAsyncReducer({ articleDetailsComments: ArticleDetailsCommentsReducer })

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)))

  return (
    <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
      <Button variant={EButtonVariants.OUTLINED} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      <ArticleDetails id={id} />
      <Text title={t('Комментарии')} className={s.commentTitle} />
      <AddNewCommentLazy onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </div >
  )
};

export default ArticleDetailsPage
