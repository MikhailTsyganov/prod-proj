import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type IUser, type IUserSchema } from '../types/userSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: IUserSchema = { authData: undefined, _inited: false };

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAuthData(state, { payload }: PayloadAction<IUser>) {
      state.authData = payload;
      setFeatureFlags(payload.features);
    },

    initAuthData(state) {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        const parseUser = JSON.parse(user) as IUser;

        state.authData = parseUser;
        setFeatureFlags(parseUser.features);
      }
      state._inited = true;
    },

    logout(state) {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
