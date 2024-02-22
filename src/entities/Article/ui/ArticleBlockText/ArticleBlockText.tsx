import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./ArticleBlockText.module.scss";

interface IArticleBlockTextProps {
	className ?: string;
}

export const ArticleBlockText: FC <IArticleBlockTextProps> = (props) => {
	const { className, children } = props;

	return (
	<div className={classNames(s.ArticleBlockText, {}, [className])}>
		{children}
	</div >
  )
};

