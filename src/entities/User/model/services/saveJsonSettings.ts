import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from '@/app/providers/store';
import { IJSONSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData';
import { getJsonSettings } from '../selectors/getJsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
  IJSONSettings,
  IJSONSettings,
  IThunkOptions<string>
>(
  'user/saveJsonSettings',
  async (newJsonSettings, { getState, rejectWithValue, dispatch }) => {
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
      return rejectWithValue('ERROR saveJsonSettings');
    }

    try {
      const response = await dispatch(
        setJsonSettingsMutation({
          userId: userData?.id,
          jsonSettings: {
            ...currentSettings,
            ...newJsonSettings,
          },
        }),
      ).unwrap();

      if (!response.jsonSettings) {
        return rejectWithValue('ERROR saveJsonSettings');
      }
      return response.jsonSettings;
    } catch (error) {
      return rejectWithValue('ERROR saveJsonSettings');
    }
  },
);
