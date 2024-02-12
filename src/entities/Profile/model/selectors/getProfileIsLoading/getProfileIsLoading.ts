import { type IStateSchema } from 'app/providers/store';

export const getProfileIsLoading = (state: IStateSchema) => state.profile?.isLoading
