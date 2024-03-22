import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './CommentList.module.scss';
import { type IComment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentItem } from '../CommentItem/CommentItem';

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
      <div className={classNames(s.CommentList, {}, [className])}>
        <CommentItem className={s.commentItem} isLoading />
        <CommentItem className={s.commentItem} isLoading />
        <CommentItem className={s.commentItem} isLoading />
      </div>
    )
  }

  return (
    <div className={classNames(s.CommentList, {}, [className])}>
      {comments?.length
			  ? comments.map(comment => <CommentItem className={s.commentItem} comment={comment} key={comment.id} isLoading={isLoading} />)
			  : <Text text={t('Комментарии отсутствуют')} />
			}
    </div >
  )
});
