import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from '@/app/providers/store';
import { type IUser, userActions } from '@/entities/User';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  IThunkOptions<string>
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.post<IUser>('/login', {
      username,
      password,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    return rejectWithValue('ERROR loginByUsername');
  }
});
