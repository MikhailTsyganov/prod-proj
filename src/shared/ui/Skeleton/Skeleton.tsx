import { CSSProperties, FC, memo } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./Skeleton.module.scss";

interface ISkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	borderRad?: string;
}

export const Skeleton: FC<ISkeletonProps> = memo((props) => {
	const { className, height, width, borderRad } = props;

	const styles: CSSProperties = {
		height,
		width,
		borderRadius: borderRad
	}

	return (
		<div className={classNames(s.Skeleton, {}, [className])} style={styles}></div >
	)
});

