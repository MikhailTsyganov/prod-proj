import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./ArticleBlockCode.module.scss";

interface IArticleBlockCodeProps {
	className ?: string;
}

export const ArticleBlockCode: FC <IArticleBlockCodeProps> = (props) => {
	const { className, children } = props;

	return (
	<div className={classNames(s.ArticleBlockCode, {}, [className])}>
		{children}
	</div >
  )
};

