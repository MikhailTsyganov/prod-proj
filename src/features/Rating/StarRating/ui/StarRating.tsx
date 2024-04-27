import s from "./StarRating.module.scss";
import { memo, useState } from "react";
import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { Icon } from "@/shared/ui/Icon/Icon";
import StarSvg from '@/shared/assets/icons/star.svg'

interface IStarRatingProps {
	className ?: string;
	onSelect?: (starsCount: number) => void
	size?: number
	selectedStars?: number
}

const stars = [1,2,3,4,5]

export const StarRating = memo((props: IStarRatingProps) => {
	const { className, selectedStars = 0, onSelect, size = 30 } = props;

	const [currentSelectedStar, setCurrentSelectedStar] = useState(selectedStars)
	const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

	const onEnterStar = (starNumber: number) => () => {
		if (!isSelected) {
			setCurrentSelectedStar(starNumber)
		}
	}

	const onLeaveStar = () => {
		if (!isSelected) {
			setCurrentSelectedStar(0)
		}
	}

	const onStarClick = (starNumber: number) => () => {
		if (!isSelected) {
			setIsSelected(true)
			onSelect?.(starNumber)
		}
	}

	return (
	<div className={classNames(s.StarRating, {}, [className])}>
		{stars.map(star => (
			<Icon 
				width={size}
				height={size}
				key={star}
				Svg={StarSvg} 
				className={classNames(s.starIcon, {
					[s.filled]: currentSelectedStar >= star,
					[s.selected]: isSelected
				})}
				onMouseEnter={onEnterStar(star)}
				onMouseLeave={onLeaveStar}
				onClick={onStarClick(star)}
			/>
		))}
	</div >
  )
});

