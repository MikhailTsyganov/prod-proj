import { FC, HTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./Card.module.scss";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: React.ReactNode
}

export const Card: FC<ICardProps> = (props) => {
	const { className, children, ...otherProps } = props;

	return (
		<div className={classNames(s.Card, {}, [className])} {...otherProps}>
			{children}
		</div >
	)
};

