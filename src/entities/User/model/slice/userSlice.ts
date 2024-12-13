import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type IUser, type IUserSchema } from '../types/userSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { IJSONSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: IUserSchema = { authData: undefined, _inited: false };

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAuthData(state, { payload }: PayloadAction<IUser>) {
      state.authData = payload;
      setFeatureFlags(payload.features);
      localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.id);
    },

    logout(state) {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, action: PayloadAction<IJSONSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload;
        }
      },
    );
    builder.addCase(
      initAuthData.fulfilled,
      (state, { payload }: PayloadAction<IUser>) => {
        state.authData = payload;
        setFeatureFlags(payload.features);
        state._inited = true;
      },
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
