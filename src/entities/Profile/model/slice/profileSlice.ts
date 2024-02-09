import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProfile, type IProfileSchema } from '../types/profile.types';

const initialState: IProfileSchema = {
  data: null,
  isLoading: false,
  error: undefined,
  readonly: true
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    // setAuthData(state, { payload }: PayloadAction<IUser>) {
    //     state.authData = payload
    // },

  }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
