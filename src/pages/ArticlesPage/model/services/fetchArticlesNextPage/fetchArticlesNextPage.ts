import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPagePage } from '../../selectors/articlesPage';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchArticlesNextPage = createAsyncThunk<
void,
void,
IThunkOptions<string>
>('articlesPage/fetchArticlesNextPage', async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;

  const hasMore = getArticlesPageHasMore(getState())
  const isLoading = getArticlesPageIsLoading(getState())
  const page = getArticlesPagePage(getState())

  if (hasMore && !isLoading) {
    dispatch(articlePageActions.setPage(page + 1))
    dispatch(fetchArticlesList({}))
  }
});
