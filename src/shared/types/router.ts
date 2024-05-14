import { EUserRoles } from '@/entities/User';
import { RouteProps } from 'react-router-dom';

export type TAppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: EUserRoles[]
};
