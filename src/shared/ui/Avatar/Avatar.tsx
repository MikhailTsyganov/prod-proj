import { type CSSProperties, type FC, useMemo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Avatar.module.scss';

interface IAvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar: FC<IAvatarProps> = (props) => {
  const { className, src, size, alt } = props;

  const styles = useMemo<CSSProperties>(
    () => ({ height: size, width: size }),
    [size]
  );

  return (
    <img
      src={src}
      alt={alt}
      className={classNames(s.Avatar, {}, [className])}
      style={styles}
    />
  );
};
