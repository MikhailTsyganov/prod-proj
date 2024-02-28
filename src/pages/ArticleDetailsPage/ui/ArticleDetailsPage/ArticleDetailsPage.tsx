import { useCallback, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { useAsyncReducer } from 'shared/hooks/reducerManager/useAsyncReducer';
import { ArticleDetailsCommentsReducer, getArticleDetailsComment } from 'pages/ArticleDetailsPage/model/slice/AricleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments/comments';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddNewCommentLazy } from 'features/AddNewComment';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';

interface IArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch()
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

  useAsyncReducer({ articleDetailsComments: ArticleDetailsCommentsReducer })

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)))

  return (
    <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text title={t('Комментарии')} className={s.commentTitle} />
      <AddNewCommentLazy onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </div >
  )
};

export default ArticleDetailsPage
