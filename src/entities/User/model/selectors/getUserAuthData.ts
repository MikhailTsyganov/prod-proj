import { type IStateSchema } from '@/app/providers/store';

export const getUserAuthData = (state: IStateSchema) => state.user.authData
