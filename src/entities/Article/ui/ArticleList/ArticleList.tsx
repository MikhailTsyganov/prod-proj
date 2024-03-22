import { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './ArticleList.module.scss';
import { EArticleView, type IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { useTranslation } from 'react-i18next';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ArticlesSort } from 'features/ArticlesSort';
import { ARTICLE_ITEM_SELECTED_ID } from 'shared/const/localstorage';

interface IArticleListProps {
  className?: string
  articles: IArticle[]
  isLoading?: boolean
  view?: EArticleView
  target?: React.HTMLAttributeAnchorTarget
  onScrollEnd?: () => void
}

const getSkeletons = (view: EArticleView) => {
  return new Array(view === EArticleView.TILE ? 9 : 3)
    .fill(0)
    .map((item, idx) => <ArticleListItemSkeleton view={view} key={idx} />
    )
}

export const ArticleList: FC<IArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    view = EArticleView.LIST,
    isLoading,
    target,
    onScrollEnd
  } = props;
  const { t } = useTranslation('articles')

  const ItemContainerComp: FC<{ height: number, width: number, index: number }> = (
    { height, width, index }

  ) => {
    return (
      <div className={s.itemContainer}>
        <ArticleListItemSkeleton view={view} key={index} className={s.skeletonCard} />
      </div>
    )
  }

  const renderItem = useCallback((index: number, article: IArticle) => (
    <ArticleListItem article={article} view={view} idx={index} />
  ), [view])
  const Header = useCallback(() => <ArticlesSort className={s.header} />, [])
  const Footer = useCallback(() => {
    if (isLoading) {
      return (
        <div className={classNames(s.ArticleList, {}, [className, s[view], s.ArticleListSkeletons])}>
          {
						getSkeletons(EArticleView.LIST)
					}
        </div >
      )
    }
    return null
  }, [isLoading, className, view])

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(s.ArticleList, {}, [className, s[view], s.ArticleListSkeletons])}>
        <Text size={ETextSize.L} title={t('Статьи не найдены')} />
      </div >
    )
  }

  return (
    <>

      {
				view === EArticleView.LIST
				  ? (

  <Virtuoso
    style={{ height: '100%' }}
    className={classNames(s.ArticleList, {}, [className, s[view]])}
    data={articles}
    components={{
							  Header,
							  Footer
    }}
    itemContent={renderItem}
    endReached={onScrollEnd}
    initialTopMostItemIndex={Number(sessionStorage.getItem(ARTICLE_ITEM_SELECTED_ID))}
						/>

				    )
				  : (
  <VirtuosoGrid
    style={{ height: '100%' }}
    className={classNames(s.ArticleList, {}, [className, s[view]])}
    data={articles}
    totalCount={articles.length}
    endReached={onScrollEnd}
    components={{
							  ScrollSeekPlaceholder: ItemContainerComp,
							  Header

    }}
    itemContent={renderItem}
    listClassName={s.listComponents}
    scrollSeekConfiguration={{
							  enter: (velocity: number) => Math.abs(velocity) > 600,
							  exit: (velocity: number) => Math.abs(velocity) < 100
    }}
    initialTopMostItemIndex={Number(sessionStorage.getItem(ARTICLE_ITEM_SELECTED_ID))}

						/>
				    )
			}
    </>

  )
});
