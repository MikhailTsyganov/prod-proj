import { IFeatureFlags } from '@/shared/types/featureFlags';

export enum EUserRoles {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: EUserRoles[];
  features?: IFeatureFlags;
}

export interface IUserSchema {
  authData?: IUser;
  _inited: boolean;
}
