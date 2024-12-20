import { type FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './ArticleListItem.module.scss';
import {
  EArticleBlockType,
  EArticleView,
  IArticleBlockText,
  type IArticle,
} from '../../model/types/article';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, EButtonVariants } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ArticleBlockText } from '../ArticleBlockText/ArticleBlockText';
import { AppLink } from '@/shared/ui/AppLink';
import { ARTICLE_ITEM_SELECTED_ID } from '@/shared/const/localstorage';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface IArticleListItemProps {
  className?: string;
  article: IArticle;
  view: EArticleView;
  target?: React.HTMLAttributeAnchorTarget;
  idx?: number;
}

export const ArticleListItem: FC<IArticleListItemProps> = memo((props) => {
  const { className, article, view, target, idx } = props;
  const { t } = useTranslation('articles');
  const types = <Text text={article?.type?.join(', ')} className={s.types} />;
  const views = (
    <>
      <Text text={String(article?.views)} className={s.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  const onShowMoreClick = useCallback(() => {
    sessionStorage.setItem(ARTICLE_ITEM_SELECTED_ID, JSON.stringify(idx));
  }, [idx]);

  if (view === EArticleView.LIST) {
    // eslint-disable-next-line
    const textBlock = article?.blocks.find(
      (block) => block.type === EArticleBlockType.TEXT,
    ) as IArticleBlockText;

    return (
      <div
        className={classNames(s.ArticleListItem, {}, [className, s[view]])}
        data-testid="ArticleListItem"
      >
        <Card>
          <div className={s.header}>
            <Avatar size={30} src={article?.user.avatar} />
            <Text text={article?.user.username} className={s.username} />
            <Text text={article?.createdAt} className={s.date} />
          </div>
          <Text title={article?.title} className={s.title} />
          {types}
          <AppImage
            src={article?.img}
            alt={article?.title}
            fallback={<Skeleton width={'100%'} height={250} />}
            className={s.img}
          />
          {textBlock && (
            <ArticleBlockText block={textBlock} className={s.text} />
          )}
          <div className={s.footer}>
            <AppLink to={getRouteArticleDetails(article?.id)} target={target}>
              <Button
                variant={EButtonVariants.OUTLINED}
                onClick={onShowMoreClick}
              >
                {t('Читать далее...')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(s.ArticleListItem, {}, [className, s[view]])}
      data-testid="ArticleListItem"
    >
      <AppLink to={getRouteArticleDetails(article?.id)} target={target}>
        <Card onClick={onShowMoreClick}>
          <div className={s.imageWrapper}>
            <AppImage
              src={article?.img}
              alt={article?.title}
              fallback={<Skeleton width={'100%'} height={200} />}
              className={s.img}
            />
            <Text text={article?.createdAt} className={s.date} />
          </div>
          <div className={s.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article?.title} className={s.title} />
        </Card>
      </AppLink>
    </div>
  );
});
