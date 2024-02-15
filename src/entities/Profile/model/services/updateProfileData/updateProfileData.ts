import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { type IProfile } from '../../types/profile';
import { getProfileCurrentDataForm } from '../../selectors/getProfileCurrentDataForm/getProfileCurrentDataForm';

export const updateProfileData = createAsyncThunk<
IProfile,
void,
IThunkOptions<string>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getProfileCurrentDataForm(getState());

  try {
    const response = await extra.api.put<IProfile>('/profile', formData);
    return response.data;
  } catch (error) {
    return rejectWithValue('ERROR updateProfileData');
  }
});
