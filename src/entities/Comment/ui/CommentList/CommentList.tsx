import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { type IComment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentItem } from '../CommentItem/CommentItem';
import { VStack } from 'shared/ui/Stack';

interface ICommentListProps {
  className?: string
  comments?: IComment[]
  isLoading?: boolean
}

export const CommentList: FC<ICommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props;

  const { t } = useTranslation('comments')

  if (isLoading) {
    return (
      <VStack className={classNames('', {}, [className])} gap='16'>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </VStack>
    )
  }

  return (
    <VStack
      className={classNames('', {}, [className])}
      gap='16'
      needMaxWidth
    >
      {comments?.length
        ? comments.map(comment => (
          <CommentItem
            comment={comment}
            key={comment.id}
            isLoading={isLoading}
          />
        ))
			  : <Text text={t('Комментарии отсутствуют')} />
			}
    </VStack >
  )
});
