import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { type IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
IArticle,
string,
IThunkOptions<string>
>('articleDetails/fetchArticleById', async (id, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IArticle>(`articles/${id}`);

    if (!response.data) {
      throw new Error()
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('ERROR fetchArticleById');
  }
});
