import s from "./Page.module.scss";
import { FC, MutableRefObject, memo, useRef } from "react";
import { useInfiniteScroll } from "shared/hooks/useInfiniteScroll/useInfiniteScroll";
import { classNames } from "shared/lib/helpers/classNames/classNames";

interface IPageProps {
	className?: string;
	onScrollEnd?: () => void
}

export const Page: FC<IPageProps> = memo((props) => {
	const { className, children, onScrollEnd } = props;

	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd
	})

	return (
		<section className={classNames(s.Page, {}, [className])} ref={wrapperRef}>
			{children}
			<div ref={triggerRef}></div>
		</section >
	)
});

