import s from './ArticleDetailsPage.module.scss';
import { type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { type TReducerList, useAsyncReducer } from '@/shared/hooks/reducerManager/useAsyncReducer';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDIspatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList, ArticleComments } from '@/widgets/ArticleDetails';

// import { useTranslation } from 'react-i18next';
import { ArticleDetailsRating } from '@/widgets/Rating';
import { VStack } from '@/shared/ui/Stack';

interface IArticleDetailsPageProps {
  className?: string
}

const reducersList: TReducerList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = (props) => {
  useAsyncReducer(reducersList)

  // const { t } = useTranslation('articleDetails')

  const { className } = props;
  const dispatch = useAppDispatch()

  const { id } = useParams()

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return null
  }

  return (
    <Page className={classNames(s.ArticleDetailsPage, {}, [className])}>
      <VStack gap='16' needMaxWidth>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleDetailsRating articleId={id} />

        <ArticleRecommendationsList
          className={s.recommendations}
      />

        <ArticleComments
          articleId={id}
      />
      </VStack>
    </Page >
  )
};

export default ArticleDetailsPage
