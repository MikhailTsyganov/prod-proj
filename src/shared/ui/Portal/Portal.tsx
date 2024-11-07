import { type FC } from 'react';
import type React from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
}

export const Portal: FC<IPortalProps> = (props) => {
  const { children, container = document.body } = props;

  return createPortal(children, container);
};
