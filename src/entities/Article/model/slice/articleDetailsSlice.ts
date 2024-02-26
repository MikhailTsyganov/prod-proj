import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type IArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { type IArticle } from '../types/article';

const initialState: IArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined
};

const profileSliceSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        fetchArticleById.pending,
        (state) => {
          state.isLoading = true;
          state.error = undefined;
        }
      )
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<IArticle>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.error = undefined;
        }
      )
      .addCase(
        fetchArticleById.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
  }
});

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } =
    profileSliceSlice;
