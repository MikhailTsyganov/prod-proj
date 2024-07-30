import { type FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './CommentItem.module.scss';
import { type IComment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { routePaths } from '@/shared/const/router';

interface ICommentItemProps {
  className?: string
  comment?: IComment
  isLoading?: boolean
}

export const CommentItem: FC<ICommentItemProps> = memo((props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(s.CommentItem, {}, [className, s.loading])}>
        <div className={s.avatarWrapper}>
          <Skeleton borderRad="50%" width={30} height={30} />
          <Skeleton className={s.username} width={100} height={16} />
        </div>

        <Skeleton className={s.text} />
      </div >
    )
  }

  if (!comment) {
    return null
  }

  const { text, user } = comment;

  return (
    <div className={classNames(s.CommentItem, {}, [className])}>
      <AppLink to={`${routePaths.profile}${user.id}`} className={s.avatarWrapper}>
        {user.avatar && <Avatar size={30} src={user.avatar} alt={user.username} />}
        <Text title={user.username} className={s.username} />
      </AppLink>

      <Text text={text} className={s.text} />
    </div >
  )
});
