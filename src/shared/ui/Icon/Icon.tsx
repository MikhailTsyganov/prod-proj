import { type FC, memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import s from './Icon.module.scss';

interface IIconProps extends SVGProps<SVGElement> {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  inverted?: boolean
}

export const Icon: FC<IIconProps> = memo((props) => {
  const { className, Svg, inverted, ...otherProps } = props;

  return (
    <Svg
      className={
        classNames(
          s.Icon,
          { [s.inverted]: inverted },
          [className]
        )
      }
    {...otherProps}
    />
  )
});
