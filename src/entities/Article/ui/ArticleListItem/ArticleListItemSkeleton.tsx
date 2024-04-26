import { type FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './ArticleListItem.module.scss';
import { type EArticleView } from '../../model/types/article';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface IArticleListItemSkeletonProps {
  className?: string
  view: EArticleView
}

export const ArticleListItemSkeleton: FC<IArticleListItemSkeletonProps> = memo((props) => {
  const { className, view } = props;

  if (view === 'LIST') {
    return (
      <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
        <Card>
          <div className={s.header}>
            <Skeleton borderRad="50%" height={30} width={30} />
            <Skeleton width={150} height={16} className={s.username} />
            <Skeleton width={150} height={16} className={s.date} />
          </div>
          <Skeleton width={250} height={24} className={s.title} />

          <Skeleton height={200} className={s.img} />
          <div className={s.footer}>
            <Skeleton height={100} />
          </div>
        </Card>
      </div >
    )
  }

  return (
    <div
      className={classNames(s.ArticleListItem, {}, [className, s[view]])}
        >
      <Card >
        <div className={s.imageWrapper}>
          <Skeleton width={200} height={200} className={s.img} />
        </div>
        <div className={s.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={s.title} />
      </Card>
    </div >
  )
});
