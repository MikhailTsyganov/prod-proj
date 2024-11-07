import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type ILoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: ILoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setUsername(state, { payload }: PayloadAction<string>) {
      state.username = payload;
    },
    setPassword(state, { payload }: PayloadAction<string>) {
      state.password = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
