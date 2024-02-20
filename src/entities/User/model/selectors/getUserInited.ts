import { type IStateSchema } from 'app/providers/store';

export const getUserInited = (state: IStateSchema) => state.user._inited
