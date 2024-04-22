import { type FC, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './Icon.module.scss';

interface IIconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  inverted?: boolean
}

export const Icon: FC<IIconProps> = memo((props) => {
  const { className, Svg, inverted } = props;

  return (
    <Svg
      className={
        classNames(
          s.Icon,
          { [s.inverted]: inverted },
          [className]
        )
      }
    />
  )
});
