import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { RatingCard } from '../RatingCard/RatingCard';
import { useGetRatingByArticleQuery, useSetRatingArticleMutation } from '../../api/articleDetailsRatingApi';

export interface IArticleDetailsRatingProps {
  className?: string
  articleId: string
}

const ArticleDetailsRating = memo((props: IArticleDetailsRatingProps) => {
  const { className, articleId } = props;

  const { t } = useTranslation('articleDetails')

  const userData = useSelector(getUserAuthData)

  const { data, isLoading } = useGetRatingByArticleQuery({
    articleId,
    userId: userData?.id ?? ''
  })
  const [setRating, { isLoading: setRatingIsLoad }] = useSetRatingArticleMutation()

  const handleSetRateArticle = useCallback((starNumber: number, feedback?: string) => {
    setRating({ rate: starNumber, feedback, articleId, userId: userData?.id ?? '' })
  }, [articleId, userData?.id, setRating])

  const acceptHandler = useCallback((starNumber: number, feedback?: string) => {
    handleSetRateArticle(starNumber, feedback)
  }, [handleSetRateArticle])

  const cancelHandler = useCallback((starNumber: number) => {
    handleSetRateArticle(starNumber)
  }, [handleSetRateArticle])

  if (isLoading) {
    return <Skeleton width={'100%'} height={120}/>;
  }

  return (
    <RatingCard
      onAccept={acceptHandler}
      onCancel={cancelHandler}
      className={className}
      title={t('Оцените статью')}
      feedBackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
      hasFeedBack
      dataStarsCount={data?.[0]?.rate}
	/>
  )
});

export default ArticleDetailsRating
