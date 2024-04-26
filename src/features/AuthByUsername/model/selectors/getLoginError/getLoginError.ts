import { type IStateSchema } from '@/app/providers/store';

export const getLoginError = (state: IStateSchema) => state?.loginForm?.error || undefined
