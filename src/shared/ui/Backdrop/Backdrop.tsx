import s from './Backdrop.module.scss';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface IBackdropProps {
  className?: string;
  onClose?: () => void;
}

export const Backdrop = memo((props: IBackdropProps) => {
  const { className, onClose } = props;

  return (
    <div
      className={classNames(s.Backdrop, {}, [className])}
      onClick={onClose}
    ></div>
  );
});
