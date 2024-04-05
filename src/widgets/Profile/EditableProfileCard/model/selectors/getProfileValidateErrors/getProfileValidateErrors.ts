import { type IStateSchema } from 'app/providers/store';

export const getProfileValidateErrors = (state: IStateSchema) => state.profile?.validateErrors
