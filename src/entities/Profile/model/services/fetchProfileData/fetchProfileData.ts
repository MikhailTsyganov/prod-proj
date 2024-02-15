import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { type IProfile } from '../../types/profile.types';

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkOptions<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<IProfile>('/profile');
      return response.data
    } catch (error) {
      return rejectWithValue('ERROR loginByUsername')
    }
  }
)
