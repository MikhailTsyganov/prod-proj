import s from './ArticleRecommendationsList.module.scss';
import { type FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ETextSize, Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import { useGetRecommendationsListQuery } from '../../api/ArticleRecommendationsApi';
import { ArticleList } from '../../../ArticleList/ArticleList';

interface IArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList: FC<IArticleRecommendationsListProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation('articles')

  const { data: recommendations, isLoading, error } = useGetRecommendationsListQuery(3)

  if (!recommendations || isLoading || error) {
    return null
  }

  return (
    <>
      {recommendations.length > 0 && (
      <VStack className={classNames('', {}, [className])} gap='8'>
        <Text
          size={ETextSize.L}
          title={t('Рекомендуем')}
				/>

        <ArticleList
          articles={recommendations}
          target='_blank'
          hideHeaderAndFooter
          isLoading={isLoading}
          virtualized={false}
				/>
      </VStack>
      )}
    </>

  )
});
