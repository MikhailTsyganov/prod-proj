import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IProfile, type IProfileSchema } from '../types/profile.types';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: IProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
  }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
