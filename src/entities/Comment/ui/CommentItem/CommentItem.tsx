import { FC, memo } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./CommentItem.module.scss";
import { IComment } from "entities/Comment/model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ICommentItemProps {
	className?: string;
	comment: IComment;
	isLoading?: boolean
}

export const CommentItem: FC<ICommentItemProps> = memo((props) => {
	const { className, comment, isLoading } = props;
	const { text, user } = comment;

	if (isLoading) {
		return (
			<div className={classNames(s.CommentItem, {}, [className])}>
				<div className={s.avatarWrapper}>
					<Skeleton borderRad="50%" width={30} height={30} />
					<Skeleton className={s.username} width={100} height={16} />
				</div>

				<Skeleton className={s.text} />
			</div >
		)
	}

	return (
		<div className={classNames(s.CommentItem, {}, [className])}>
			<div className={s.avatarWrapper}>
				{user.avatar && <Avatar size={30} src={user.avatar} alt={user.username} />}
				<Text title={user.username} className={s.username} />
			</div>

			<Text text={text} className={s.text} />
		</div >
	)
});

