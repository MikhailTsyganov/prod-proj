import { type DetailedHTMLProps, type HTMLAttributes } from 'react';
import s from './Flex.module.scss';
import {
  type TMods,
  classNames,
} from '@/shared/lib/helpers/classNames/classNames';

export type TFlexJustify = 'start' | 'center' | 'end' | 'between';
export type TFlexAlign = 'start' | 'center' | 'end';
export type TFlexDirection = 'row' | 'column';
export type TFlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<TFlexJustify, string> = {
  start: s.justifyStart,
  center: s.justifyCenter,
  end: s.justifyEnd,
  between: s.justifyBetween,
};

const alignClasses: Record<TFlexAlign, string> = {
  start: s.alignStart,
  center: s.alignCenter,
  end: s.alignEnd,
};

const directionClasses: Record<TFlexDirection, string> = {
  column: s.directionColumn,
  row: s.directionRow,
};

const gapClasses: Record<TFlexGap, string> = {
  4: s.gap4,
  8: s.gap8,
  16: s.gap16,
  32: s.gap32,
};

export interface IFlexProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  justify?: TFlexJustify;
  align?: TFlexAlign;
  direction: TFlexDirection;
  gap?: TFlexGap;
  needMaxWidth?: boolean;
}

export const Flex = (props: IFlexProps) => {
  const {
    className,
    children,
    direction = 'row',
    align = 'center',
    justify = 'start',
    gap,
    needMaxWidth,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: TMods = {
    [s.maxWidth]: needMaxWidth,
  };

  return (
    <div className={classNames(s.Flex, mods, classes)} {...otherProps}>
      {children}
    </div>
  );
};
