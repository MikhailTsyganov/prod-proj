import { type IStateSchema } from 'app/providers/store';

export const getProfileReadonly = (state: IStateSchema) => state.profile?.readonly
