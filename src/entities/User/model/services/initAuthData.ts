import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from '@/app/providers/store';
import { IUser } from '../types/userSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { getUserDataBuIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<
  IUser,
  void,
  IThunkOptions<string>
>('user/initAuthData', async (_, { rejectWithValue, dispatch }) => {
  const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  console.log('userId', userId);

  if (!userId) {
    return rejectWithValue('ERROR initAuthData');
  }

  try {
    const response = await dispatch(getUserDataBuIdQuery(userId)).unwrap();

    return response;
  } catch (error) {
    return rejectWithValue('ERROR initAuthData');
  }
});
