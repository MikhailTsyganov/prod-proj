import { FC, memo, useMemo } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./ArticleList.module.scss";
import { EArticleView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface IArticleListProps {
	className?: string;
	articles: IArticle[]
	isLoading?: boolean
	view?: EArticleView
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
		isLoading
	} = props;

	const renderArticleList = (article: IArticle) => (
		<ArticleListItem
			article={article}
			view={view}
			key={article.id}
		/>
	)

	return (<>
		<div className={classNames(s.ArticleList, {}, [className, s[view]])}>
			{articles.length ? articles.map(renderArticleList) : null}

		</div >
		{isLoading && (
			<div className={classNames(s.ArticleList, {}, [className, s[view], s.ArticleListSkeletons])}>
				{
					getSkeletons(view)
				}
			</div >)}</>

	)
});

