import { EArticlesSortField } from "features/ArticlesSort/model/types/ArticlesSortSchema";
import s from "./ArticlesSortSelects.module.scss";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { ISelectList, Select } from "shared/ui/Select/Select";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDIspatch";
import { articlesSortActions } from "../../model/slices/articlesSortSlice";
import { useSelector } from "react-redux";
import { getArticlesSortOrder, getArticlesSortSort } from "../../model/selectors/articlesSort";
import { TOrder } from "shared/types";
import { articlePageActions } from "pages/ArticlesPage/model/slices/articlePageSlice";

interface IArticlesSortSelectsProps {
	className?: string;
	fetchData: () => void
}

export const ArticlesSortSelects = memo((props: IArticlesSortSelectsProps) => {
	const { className, fetchData } = props;
	const { t } = useTranslation('articles')
	const dispatch = useAppDispatch()

	const sort = useSelector(getArticlesSortSort)
	const order = useSelector(getArticlesSortOrder)

	const orderList = useMemo<ISelectList<TOrder>[]>(() => [
		{
			value: 'asc',
			content: t('asc'),
		},
		{
			value: 'desc',
			content: t('desc'),
		}
	], [t])

	const sortList = useMemo<ISelectList<EArticlesSortField>[]>(() => [
		{
			value: EArticlesSortField.CREATED_AT,
			content: t('дате создания'),
		},
		{
			value: EArticlesSortField.TITLE,
			content: t('названию'),
		},
		{
			value: EArticlesSortField.VIEWS,
			content: t('просмотрам'),
		}
	], [t])

	const onSortChange = useCallback((value: EArticlesSortField) => {
		dispatch(articlesSortActions.setSort(value))
		dispatch(articlePageActions.setPage(1))
		fetchData()
	}, [dispatch])

	const onOrderChange = useCallback((value: TOrder) => {
		dispatch(articlesSortActions.setOrder(value))
		dispatch(articlePageActions.setPage(1))
		fetchData()
	}, [dispatch])

	return (
		<div className={classNames(s.ArticlesSortSelects, {}, [className])}>
			<Select value={sort} title={t('Сортировать по')} list={sortList} onChange={onSortChange} />
			<Select value={order} title={t('по')} list={orderList} onChange={onOrderChange} />
		</div >
	)
});

