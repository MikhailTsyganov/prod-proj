import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { EValidateProfileError, type IProfile } from '../../types/profile';
import { getProfileCurrentDataForm } from '../../selectors/getProfileCurrentDataForm/getProfileCurrentDataForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
IProfile,
void,
IThunkOptions<EValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getProfileCurrentDataForm(getState());

  const errors = validateProfileData(formData)

  if (errors.length) {
    return rejectWithValue(errors)
  }

  try {
    const response = await extra.api.put<IProfile>('/profile', formData);

    if (!response.data) {
      throw new Error()
    }

    return response.data;
  } catch (error) {
    return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
  }
});
