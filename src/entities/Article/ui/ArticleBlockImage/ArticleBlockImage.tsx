import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./ArticleBlockImage.module.scss";

interface IArticleBlockImageProps {
	className ?: string;
}

export const ArticleBlockImage: FC <IArticleBlockImageProps> = (props) => {
	const { className, children } = props;

	return (
	<div className={classNames(s.ArticleBlockImage, {}, [className])}>
		{children}
	</div >
  )
};

