import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type IProfile, type IProfileSchema } from 'entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

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
    setReadonly(state, { payload }: PayloadAction<boolean>) {
      state.readonly = payload;
    },
    cancelEfit(state) {
      state.readonly = true;
      state.currentDataForm = state.data;
      state.validateErrors = undefined;
    },
    updateData(state, { payload }: PayloadAction<IProfile>) {
      state.currentDataForm = {
        ...state.currentDataForm,
        ...payload
      };
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.currentDataForm = action.payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.currentDataForm = action.payload;
          state.readonly = true;
          state.validateErrors = undefined;
        }
      )
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.validateErrors = payload;
      });
  }
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
