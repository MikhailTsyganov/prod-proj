import { memo, type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

import s from './AppLink.module.scss';

export enum EAppLinkVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string
  variant?: EAppLinkVariants
}

export const AppLink: FC<IAppLinkProps> = memo((props) => {
  const { className, children, to, variant = EAppLinkVariants.PRIMARY, ...otherProps } = props;

  return (
    <Link to={to} className={classNames(s.applink, {}, [className, s[variant]])} {...otherProps}>
      {children}
    </Link>
  );
});
