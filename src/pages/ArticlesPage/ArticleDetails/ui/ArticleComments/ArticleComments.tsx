import { AddNewCommentLazy } from '@/features/AddNewComment';
import s from './ArticleComments.module.scss';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { ETextSize, Text } from '@/shared/ui/Text';
import { CommentList } from '@/entities/Comment';
import { useTranslation } from 'react-i18next';
import {
  useCreateCommentByArticleIdMutation,
  useGetAllCommentsByArticleIdQuery,
} from '../../api/ArticleCommentsApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

interface IArticleCommentsProps {
  className?: string;
  articleId?: string;
}

export const ArticleComments = memo((props: IArticleCommentsProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation('articles');

  const userId = useSelector(getUserAuthData)?.id;

  const { data: comments, isLoading: commentsIsLoading } =
    useGetAllCommentsByArticleIdQuery(articleId);
  const [createNewComment] = useCreateCommentByArticleIdMutation();

  const onSendComment = useCallback(
    (text: string) => {
      createNewComment({ text, articleId, userId });
    },
    [createNewComment, userId, articleId],
  );

  return (
    <VStack className={classNames(s.ArticleComments, {}, [className])}>
      <Text
        size={ETextSize.L}
        title={t('Комментарии')}
        className={s.commentTitle}
      />
      <VStack needMaxWidth gap="16">
        <AddNewCommentLazy onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    </VStack>
  );
});
