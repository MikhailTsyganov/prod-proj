import s from './ArticleList.module.scss';
import { type FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ArticleListItem, ArticleListItemSkeleton, EArticleView, type IArticle } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { ETextSize, Text } from '@/shared/ui/Text';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ARTICLE_ITEM_SELECTED_ID } from '@/shared/const/localstorage';
import { HStack } from '@/shared/ui/Stack';
import { ArticlesSort } from '../ArticlesSort';

interface IArticleListProps {
  className?: string
  articles: IArticle[]
  isLoading?: boolean
  view?: EArticleView
  target?: React.HTMLAttributeAnchorTarget
  onScrollEnd?: () => void
  hideHeaderAndFooter?: boolean
  virtualized?: boolean
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
    articles = [],
    view = EArticleView.TILE,
    isLoading,
    target,
    onScrollEnd,
    hideHeaderAndFooter = false,
    virtualized = true
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

  if (!virtualized) {
    return (
      <HStack gap='16'>
        {
        articles.map((article, idx) => (
          <ArticleListItem
            article={article}
            view={view}
            key={idx}/>
        ))
        }
      </HStack>
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
      Header: !hideHeaderAndFooter ? Header : () => <></>,
      Footer: !hideHeaderAndFooter ? Footer : () => <></>
    }}
    itemContent={renderItem}
    endReached={onScrollEnd}
    initialTopMostItemIndex={Number(sessionStorage.getItem(ARTICLE_ITEM_SELECTED_ID))}
    data-testid="ArticleList"
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
      Header: !hideHeaderAndFooter ? Header : () => <></>

    }}
    itemContent={renderItem}
    listClassName={s.listComponents}
    scrollSeekConfiguration={{
      enter: (velocity: number) => Math.abs(velocity) > 600,
      exit: (velocity: number) => Math.abs(velocity) < 100
    }}
    initialTopMostItemIndex={Number(sessionStorage.getItem(ARTICLE_ITEM_SELECTED_ID))}
    data-testid="ArticleList"
              />
				    )
        }
    </>

  )
});
