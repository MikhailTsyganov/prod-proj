import { type IStateSchema } from 'app/providers/store';

export const getLoginIsLoading = (state: IStateSchema) => state?.loginForm?.isLoading || false
