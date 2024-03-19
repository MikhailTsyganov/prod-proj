import { EArticleView } from "entities/Article";
import s from "./ArticlesViewSwitcher.module.scss";
import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import TileIcon from 'shared/assets/icons/tile.svg'
import ListIcon from 'shared/assets/icons/list.svg'
import { Button, EButtonVariants } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDIspatch";
import { articlePageActions } from "pages/ArticlesPage/model/slices/articlePageSlice";

const viewTypes = [
	{
		view: EArticleView.TILE,
		icon: TileIcon
	},
	{
		view: EArticleView.LIST,
		icon: ListIcon
	}
]

interface IArticlesViewSwitcherProps {
	className?: string;
	view: EArticleView
	onChangeView: (newView: EArticleView) => void
}

export const ArticlesViewSwitcher: FC<IArticlesViewSwitcherProps> = memo((props) => {
	const { className, view, onChangeView } = props;

	const onClick = (newView: EArticleView) => () => {
		onChangeView(newView)
	}

	return (
		<div className={classNames(s.ArticlesViewSwitcher, {}, [className])}>
			{viewTypes.map(item => (
				<Button
					variant={EButtonVariants.TRANSPARENT}
					onClick={onClick(item.view)}
					key={item.view}
				>
					<Icon
						Svg={item.icon}
						className={classNames('', { [s.selected]: item.view === view })}
					/>
				</Button>
			))}
		</div >
	)
});

