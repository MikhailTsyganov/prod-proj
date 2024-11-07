import { type FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './AddNewComment.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button, EButtonVariants } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getAddNewCommentError,
  getAddNewCommentText,
} from '../model/selectors/addNewComment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDIspatch';
import {
  addNewCommentActions,
  addNewCommentReducer,
} from '../model/slices/addNewCommentSlice';
import { useAsyncReducer } from '@/shared/lib/hooks/reducerManager/useAsyncReducer';

interface IAddNewCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddNewComment: FC<IAddNewCommentProps> = memo((props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation('comments');
  const dispatch = useAppDispatch();

  const text = useSelector(getAddNewCommentText);
  const error = useSelector(getAddNewCommentError);

  const onChangeText = useCallback(
    (value: string) => {
      dispatch(addNewCommentActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onChangeText('');
  }, [text, onSendComment, onChangeText]);

  useAsyncReducer({ addNewComment: addNewCommentReducer });

  return (
    <div
      className={classNames(s.AddNewComment, {}, [className])}
      data-testid="AddNewComment"
    >
      <Input
        placeholder={t('Введите текст комментария')}
        value={text}
        onChange={onChangeText}
        className={s.input}
        data-testid="AddNewComment.input"
      />
      <Button
        variant={EButtonVariants.OUTLINED}
        onClick={onSendHandler}
        data-testid="AddNewComment.addBtn"
      >
        {t('Отправить')}
      </Button>
    </div>
  );
});

export default AddNewComment;
