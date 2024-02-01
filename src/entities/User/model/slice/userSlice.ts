import { createSlice } from '@reduxjs/toolkit'
import { type IUserSchema } from '../types/userSchema';

const initialState: IUserSchema = { authData: null };

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    // increment(state) {
    //   state.value++
    // },
    // decrement(state) {
    //   state.value--
    // }
  }
})

export const { actions: userActions, reducer: userReducer } = userSlice;
