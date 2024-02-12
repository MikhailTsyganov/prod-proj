import { type IStateSchema } from 'app/providers/store';

export const getProfileError = (state: IStateSchema) => state.profile?.error
