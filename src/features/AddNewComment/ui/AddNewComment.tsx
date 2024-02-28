import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import s from "./AddNewComment.module.scss";
import { Input } from "shared/ui/Input/Input";
import { Button, EButtonVariants } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getAddNewCommentError, getAddNewCommentText } from "../model/selectors/addNewComment";
import { useAppDispatch } from "shared/hooks/useAppDispatch/useAppDIspatch";
import { addNewCommentActions, addNewCommentReducer } from "../model/slices/addNewCommentSlice";
import { useAsyncReducer } from "shared/hooks/reducerManager/useAsyncReducer";

interface IAddNewCommentProps {
	className?: string;
	onSendComment: (text: string) => void
}

const AddNewComment: FC<IAddNewCommentProps> = memo((props) => {
	const { className, onSendComment } = props;
	const { t } = useTranslation('comments')
	const dispatch = useAppDispatch()

	const text = useSelector(getAddNewCommentText)
	const error = useSelector(getAddNewCommentError)

	const onChangeText = useCallback((value: string) => {
		dispatch(addNewCommentActions.setText(value))
	}, [dispatch])

	const onSendHandler = useCallback(() => {
		onSendComment(text || '')
		onChangeText('')
	}, [text, onSendComment, onChangeText])


	useAsyncReducer({ addNewComment: addNewCommentReducer })

	return (
		<div className={classNames(s.AddNewComment, {}, [className])}>
			<Input
				placeholder={t('Введите текст комментария')}
				value={text}
				onChange={onChangeText}
				className={s.input}
			/>
			<Button
				variant={EButtonVariants.OUTLINED}
				onClick={onSendHandler}
			>
				{t('Отправить')}
			</Button>
		</div >
	)
});

export default AddNewComment