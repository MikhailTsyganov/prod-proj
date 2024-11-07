import { type CSSProperties, type FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import DefaultUserSvg from '../../assets/icons/user.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface IAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

export const Avatar: FC<IAvatarProps> = (props) => {
  const { className, src, size = 100, alt, fallbackInverted = false } = props;

  const styles = useMemo<CSSProperties>(
    () => ({ height: size, width: size }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} borderRad="50%" />;
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      Svg={DefaultUserSvg}
      width={size}
      height={size}
    />
  );

  return (
    <AppImage
      src={src}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(s.Avatar, {}, [className])}
      style={styles}
    />
  );
};
