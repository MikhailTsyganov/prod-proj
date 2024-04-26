import { type IStateSchema } from '@/app/providers/store';

export const getLoginPassword = (state: IStateSchema) => state?.loginForm?.password || ''
