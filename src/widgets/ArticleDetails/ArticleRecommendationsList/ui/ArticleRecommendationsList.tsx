import { ArticleList, EArticleView } from 'entities/Article';
import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';

interface IArticleRecommendationsListProps {
  className?: string
}

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
	  getRecommendationsList: build.query({
      	query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
	  })
  })
})

export const { useGetRecommendationsListQuery } = recommendationsApi

export const ArticleRecommendationsList: FC<IArticleRecommendationsListProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation('articles')

  const { data: recommendations } = useGetRecommendationsListQuery(3)

  return (
    <>
      {recommendations?.length > 0 && (
      <VStack className={classNames('', {}, [className])} gap='8'>
        <Text
          size={ETextSize.L}
          title={t('Рекомендуем')}
				/>

        <ArticleList
          articles={recommendations}
          target='_blank'
          hideHeaderAndFooter
				/>
      </VStack>
      )}
    </>

  )
});
