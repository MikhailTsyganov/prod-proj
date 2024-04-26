import s from './ArticleDetailsPage.module.scss';
import { type FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { type TReducerList, useAsyncReducer } from '@/shared/hooks/reducerManager/useAsyncReducer';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDIspatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Page } from '@/widgets/Page/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList } from '@/widgets/ArticleDetails/ArticleRecommendationsList';
import { ArticleComments } from '@/widgets/ArticleDetails/ArticleComments/ui/ArticleComments';

interface IArticleDetailsPageProps {
  className?: string
}

const reducersList: TReducerList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = (props) => {
  useAsyncReducer(reducersList)

  const { className } = props;
  const dispatch = useAppDispatch()

  const { id } = useParams()

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <Page className={classNames(s.ArticleDetailsPage, {}, [className])}>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />

      <ArticleRecommendationsList
        className={s.recommendations}
      />

      <ArticleComments
        articleId={id}
      />
    </Page >
  )
};

export default ArticleDetailsPage
