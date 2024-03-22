import { EArticleType } from 'entities/Article/model/types/article';
import s from './ArticlesSortTabs.module.scss';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { type ITabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useSelector } from 'react-redux';
import { getArticlesSortTab } from '../../model/selectors/articlesSort';
import { articlesSortActions } from '../../model/slices/articlesSortSlice';
import { articlePageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDIspatch';

interface IArticlesSortTabsProps {
  className?: string
  fetchData?: () => void
}

export const ArticlesSortTabs = memo((props: IArticlesSortTabsProps) => {
  const { className, fetchData } = props;
  const dispatch = useAppDispatch()
  const currentTab = useSelector(getArticlesSortTab)

  const { t } = useTranslation('articles')

  const onTabClick = useCallback(
    (tab: ITabItem) => {
      dispatch(articlesSortActions.setTab(tab.value as EArticleType))
      dispatch(articlePageActions.setPage(1))
      fetchData?.()
    },
    [dispatch, fetchData]
  )

  const tabList = useMemo<ITabItem[]>(() => [
    {
      value: EArticleType.ALL,
      content: t('Все статьи')
    },
    {
      value: EArticleType.IT,
      content: t('Айти')
    },
    {
      value: EArticleType.ECONOMICS,
      content: t('Экономика')
    },
    {
      value: EArticleType.SCIENCE,
      content: t('Наука')
    }
  ], [t])

  return (
    <Tabs
      className={classNames(s.ArticlesSortTabs, {}, [className])}
      tabList={tabList}
      onTabClick={onTabClick}
      currentValue={currentTab}
		/>
  )
});
