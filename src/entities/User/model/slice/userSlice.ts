import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IUser, type IUserSchema } from '../types/userSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

const initialState: IUserSchema = { authData: undefined, _inited: false };

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setAuthData(state, { payload }: PayloadAction<IUser>) {
      state.authData = payload
    },

    initAuthData(state) {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) state.authData = JSON.parse(user)
      state._inited = true
    },

    logout(state) {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }

  }
})

export const { actions: userActions, reducer: userReducer } = userSlice;
