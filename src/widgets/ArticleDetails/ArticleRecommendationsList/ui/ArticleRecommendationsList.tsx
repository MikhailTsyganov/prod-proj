import s from './ArticleRecommendationsList.module.scss';
import { ArticleList } from 'entities/Article';
import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { useGetRecommendationsListQuery } from '../api/ArticleRecommendationsApi';

interface IArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList: FC<IArticleRecommendationsListProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation('articles')

  const { data: recommendations, isLoading } = useGetRecommendationsListQuery(3)
  console.log(recommendations);

  return (
    <>
      {recommendations?.length > 0 && (
      <VStack className={classNames('', {}, [className])} gap='8'>
        <Text
          size={ETextSize.L}
          title={t('Рекомендуем')}
				/>

        <ArticleList
          className={s.recommendations}
          articles={recommendations}
          target='_blank'
          hideHeaderAndFooter
          isLoading={isLoading}
				/>
      </VStack>
      )}
    </>

  )
});
