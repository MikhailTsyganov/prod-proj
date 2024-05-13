import { lazy, Suspense } from 'react';
import { IArticleDetailsRatingProps } from './ArticleDetailsRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ArticleDetailsRatingLazy = lazy(async () => await import('./ArticleDetailsRating'));

export const ArticleDetailsRatingAsync = (props: IArticleDetailsRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width={'100%'} height={140}/>}>
      <ArticleDetailsRatingLazy {...props} />
    </Suspense>
  )
}
