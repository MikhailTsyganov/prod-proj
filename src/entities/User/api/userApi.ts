import { rtkApi } from '@/shared/api/rtkApi';
import { IUser } from '../model/types/userSchema';
import { IJSONSettings } from '../model/types/jsonSettings';

interface ISetJsonSettingsArg {
  userId: string;
  jsonSettings: IJSONSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<IUser, ISetJsonSettingsArg>({
      query: ({ jsonSettings, userId }) => ({
        url: '/users/' + userId,
        method: 'PATCH',
        body: { jsonSettings },
      }),
    }),
    getUserDataBuId: build.query<IUser, string>({
      query: (userId) => ({
        url: '/users/' + userId,
      }),
    }),
  }),
});

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;
export const getUserDataBuIdQuery = userApi.endpoints.getUserDataBuId.initiate;
