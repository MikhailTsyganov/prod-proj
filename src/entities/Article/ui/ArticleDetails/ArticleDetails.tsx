import { FC, memo, useEffect } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./ArticleDetails.module.scss";
import { useAsyncReducer } from "shared/hooks/reducerManager/useAsyncReducer";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDIspatch";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/articleDetails";
import { ETextAlign, Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface IArticleDetailsProps {
	className?: string;
	id: string
}

export const ArticleDetails: FC<IArticleDetailsProps> = memo((props) => {
	const { className, id } = props;
	const dispatch = useAppDispatch()
	const { t } = useTranslation('articles')

	const data = useSelector(getArticleDetailsData)
	// const isLoading = useSelector(getArticleDetailsIsLoading)
	const isLoading = true
	const error = useSelector(getArticleDetailsError)

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchArticleById(id))
		}

	}, [dispatch, id])

	useAsyncReducer({ articleDetails: articleDetailsReducer })

	let content;

	if (isLoading) {
		content = (
			<div>
				<Skeleton height={200} width={200} borderRad='50%' className={s.avatar} />
				<Skeleton height={30} width={670} className={s.title} />
				<Skeleton height={30} width={400} className={s.skeletonItems} />
				<Skeleton height={231} width='100%' className={s.skeletonItems} />
				<Skeleton height={231} width='100%' className={s.skeletonItems} />
			</div>
		)
	} else if (error) {
		content = <Text title={t('Произошла ошибка при загрузке статьи')} align={ETextAlign.CENTER} />
	} else {
		content = <div>HI</div>
	}


	return (
		<div className={classNames(s.ArticleDetails, {}, [className])}>
			{content}
		</div >
	)
});

