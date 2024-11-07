import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from '@/app/providers/store';
import { type IArticle } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  IArticle[],
  void,
  IThunkOptions<string>
>('articlesDetailsPage/fetchArticleRecommendations', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _limit: 4,
      },
    });

    return response.data;
  } catch (error) {
    return rejectWithValue('ERROR fetchArticleRecommendations');
  }
});
