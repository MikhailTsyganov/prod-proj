import { IFeatureFlags } from '@/shared/types/featureFlags';
import { IJSONSettings } from './jsonSettings';

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
  jsonSettings?: IJSONSettings;
}

export interface IUserSchema {
  authData?: IUser;
  _inited: boolean;
}
