import { useTranslation } from 'react-i18next';
import s from './ArticleDetailsPageHeader.module.scss';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, EButtonVariants } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEdit } from '../../model/selectors/article/article';
import { routePaths } from '@/shared/const/router';

interface IArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: IArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const navigate = useNavigate()
  const { t } = useTranslation('articles')

  const canEdit = useSelector(getCanEdit)
  const article = useSelector(getArticleDetailsData)

  const onBackToList = useCallback(
    () => {
      navigate(routePaths.articles)
    },
    [navigate]
  )

  const onEdit = useCallback(
    () => {
      navigate(routePaths.article_details + article?.id + '/edit')
    },
    [navigate, article]
  )

  return (
    <div className={classNames(s.ArticleDetailsPageHeader, {}, [className])}>
      <Button
        variant={EButtonVariants.OUTLINED}
        onClick={onBackToList}
			>
        {t('Назад к списку')}
      </Button>
      {canEdit && (
      <Button
        className={s.editBtn}
        variant={EButtonVariants.OUTLINED}
        onClick={onEdit}
				>
        {t('Редактировать')}
      </Button>
      )}
    </div >
  )
});
