import { FC, memo, useMemo } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./ArticleList.module.scss";
import { EArticleView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { useTranslation } from "react-i18next";
import { ETextSize, Text } from "shared/ui/Text/Text";

interface IArticleListProps {
	className?: string;
	articles: IArticle[]
	isLoading?: boolean
	view?: EArticleView
	target?: React.HTMLAttributeAnchorTarget
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
		target
	} = props;
	const { t } = useTranslation('articles')

	const renderArticleList = (article: IArticle) => (
		<ArticleListItem
			article={article}
			view={view}
			key={article.id}
			target={target}
		/>
	)

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(s.ArticleList, {}, [className, s[view], s.ArticleListSkeletons])}>
				<Text size={ETextSize.L} title={t('Статьи не найдены')} />
			</div >
		)
	}

	return (<>
		<div className={classNames(s.ArticleList, {}, [className, s[view]])}>
			{articles.length ? articles.map(renderArticleList) : null}

		</div >
		{
			isLoading && (
				<div className={classNames(s.ArticleList, {}, [className, s[view], s.ArticleListSkeletons])}>
					{
						getSkeletons(view)
					}
				</div >
			)
		}</>

	)
});

