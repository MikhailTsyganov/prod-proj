import { type IStateSchema } from 'app/providers/store';

export const getProfileCurrentDataForm = (state: IStateSchema) =>
  state.profile?.currentDataForm;
