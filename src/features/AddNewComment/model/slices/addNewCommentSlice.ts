import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IAddNewCommentSchema } from '../types/addNewComment';

const initialState: IAddNewCommentSchema = {
  text: '',
  error: ''
};

const addNewCommentSlice = createSlice({
  name: 'addNewComment',
  initialState,
  reducers: {
    setText(state, { payload }: PayloadAction<string>) {
      state.text = payload;
    }
  }
  // extraReducers(builder) {
  //     builder
  //         .addCase(loginByUsername.pending, (state, action) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(loginByUsername.fulfilled, (state, action) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(loginByUsername.rejected, (state, { payload }) => {
  //             state.isLoading = false;
  //             state.error = payload;
  //         })
  // }
})

export const { actions: addNewCommentActions, reducer: addNewCommentReducer } = addNewCommentSlice;
