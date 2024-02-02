import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IUser, type IUserSchema } from '../types/userSchema';

const initialState: IUserSchema = { authData: null };

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAuthData(state, { payload }: PayloadAction<IUser>) {
      state.authData = payload
    }

  }
})

export const { actions: userActions, reducer: userReducer } = userSlice;
