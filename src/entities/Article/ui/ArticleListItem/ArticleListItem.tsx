import { FC, memo } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./ArticleListItem.module.scss";
import { EArticleBlockType, EArticleView, IArticle, IArticleBlockText } from "../../model/types/article";
import { Text } from "shared/ui/Text/Text";
import EyeIcon from 'shared/assets/icons/eye.svg'
import { Icon } from "shared/ui/Icon/Icon";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, EButtonVariants } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";
import { routePaths } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface IArticleListItemProps {
	className?: string;
	article: IArticle
	view: EArticleView
	target?: React.HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<IArticleListItemProps> = memo((props) => {
	const { className, article, view, target } = props;
	const { t } = useTranslation('articles')
	const types = <Text text={article.type.join(', ')} className={s.types} />
	const views = (
		<>
			<Text text={String(article.views)} className={s.views} />
			<Icon Svg={EyeIcon} />
		</>
	)

	if (view === 'LIST') {
		const textBlock = article.blocks.find(block => block.type === EArticleBlockType.TEXT) as IArticleBlockText

		return (
			<div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
				<Card>
					<div className={s.header}>
						<Avatar size={30} src={article.user.avatar} />
						<Text text={article.user.username} className={s.username} />
						<Text text={article.createdAt} className={s.date} />
					</div>
					<Text title={article.title} className={s.title} />
					{types}
					<img src={article.img} alt={article.title} className={s.img} />
					{textBlock && <ArticleBlockText block={textBlock} className={s.text} />}
					<div className={s.footer}>
						<AppLink to={`${routePaths.article_details}${article.id}`} target={target}>
							<Button variant={EButtonVariants.OUTLINED}>{t('Читать далее...')}</Button>
						</AppLink>
						{views}
					</div>
				</Card>
			</div >
		)
	}

	return (
		<div
			className={classNames(s.ArticleListItem, {}, [className, s[view]])}
		>
			<AppLink to={`${routePaths.article_details}${article.id}`} target={target}>
				<Card>
					<div className={s.imageWrapper}>
						<img src={article.img} alt={article.title} className={s.img} />
						<Text text={article.createdAt} className={s.date} />
					</div>
					<div className={s.infoWrapper}>
						{types}
						{views}
					</div>
					<Text text={article.title} className={s.title} />
				</Card>
			</AppLink>
		</div >
	)
});

