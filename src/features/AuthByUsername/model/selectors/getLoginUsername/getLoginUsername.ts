import { type IStateSchema } from '@/app/providers/store';

export const getLoginUsername = (state: IStateSchema) => state?.loginForm?.username || ''
