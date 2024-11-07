import { type TPopupDirection } from '@/shared/types/ui';
import s from './popup.module.scss';

export const mapDirectionClass: Record<TPopupDirection, string> = {
  'top left': s.directionTopLeft,
  'top right': s.directionTopRight,
  'bottom left': s.directionBottomLeft,
  'bottom right': s.directionBottomRight,
};
