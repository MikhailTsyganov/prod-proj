import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from '@/app/providers/store';
import { type IComment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  IComment[],
  string | undefined,
  IThunkOptions<string>
>(
  'articleDetailsComments/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    if (!articleId) {
      return rejectWithValue('empty id');
    }

    try {
      const response = await extra.api.get<IComment[]>(
        `/comments?articleId=${articleId}&_expand=user`,
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('ERROR fetchCommentsByArticleId');
    }
  },
);
