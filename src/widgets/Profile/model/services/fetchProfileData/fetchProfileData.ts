import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from '@/app/providers/store';
import { type IProfile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<
  IProfile,
  string,
  IThunkOptions<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('ERROR fetchProfileData');
  }
});
