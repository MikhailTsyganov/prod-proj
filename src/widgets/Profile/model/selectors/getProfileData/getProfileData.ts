import { type IStateSchema } from '@/app/providers/store';

export const getProfileData = (state: IStateSchema) => state.profile?.data;
