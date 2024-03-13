import { ArticlesViewSwitcher } from "features/ArticlesViewSwitcher";
import s from "./ArticlesSort.module.scss";
import { memo, useCallback, useEffect, useMemo } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { EArticleView } from "entities/Article";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDIspatch";
import { useSelector } from "react-redux";
import { getArticlesSortOrder, getArticlesSortSearch, getArticlesSortSort, getArticlesSortTab, getArticlesSortView } from "features/ArticlesSort/model/selectors/articlesSort";
import { articlesSortActions, articlesSortReducer } from "features/ArticlesSort/model/slices/articlesSortSlice";
import { useAsyncReducer } from "shared/hooks/reducerManager/useAsyncReducer";
import { useInitialEffect } from "shared/hooks/useInitialEffect/useInitialEffect";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { EArticlesSortField } from "features/ArticlesSort/model/types/ArticlesSortSchema";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { ArticlesSortSelects } from "../ArticlesSortSelects/ArticlesSortSelects";
import { articlePageActions } from "pages/ArticlesPage/model/slices/articlePageSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/hooks/useDebounce/useDebounce";
import { useSearchParams } from "react-router-dom";
import { initArticlesSort } from "features/ArticlesSort/model/services/initArticlesSort/initArticlesSort";
import { ITabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { EArticleType } from "entities/Article/model/types/article";
import { ArticlesSortTabs } from "../ArticlesSortTabs/ArticlesSortTabs";

interface IArticlesSortProps {
	className?: string;
}

export const ArticlesSort = memo((props: IArticlesSortProps) => {
	useAsyncReducer({ articlesPageSort: articlesSortReducer })
	const { className } = props;
	const { t } = useTranslation('articles')
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()

	const view = useSelector(getArticlesSortView)
	const search = useSelector(getArticlesSortSearch)
	const sort = useSelector(getArticlesSortSort)
	const order = useSelector(getArticlesSortOrder)


	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }))
	},
		[sort]
	)

	const deboucedFetchData = useDebounce(fetchData, 500)


	const onChangeView = useCallback(
		(newView: EArticleView) => {
			dispatch(articlesSortActions.setView(newView))
		},
		[dispatch],
	)

	const onChangeSearch = useCallback(
		(value: string) => {
			dispatch(articlesSortActions.setSearch(value))
			dispatch(articlePageActions.setPage(1))
			deboucedFetchData()
		},
		[dispatch],
	)




	useInitialEffect(() => {
		dispatch(initArticlesSort(searchParams))
	})



	return (
		<div className={classNames(s.ArticlesSort, {}, [className])}>
			<div className={s.sortWrapper}>
				<ArticlesSortSelects fetchData={deboucedFetchData} />
				<ArticlesViewSwitcher
					view={view}
					onChangeView={onChangeView}
				/>
			</div>
			<Card className={s.searchWrapper}>
				<Input
					placeholder={t('Поиск...')}
					onChange={onChangeSearch}
					value={search}
				/>
			</Card>
			<ArticlesSortTabs deboucedFetchData={deboucedFetchData} />
		</div >
	)
});

