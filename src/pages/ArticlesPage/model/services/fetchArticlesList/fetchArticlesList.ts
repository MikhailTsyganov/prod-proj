import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { IArticle } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPage';

interface IfetchArticlesListReq {
    page: number
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    IfetchArticlesListReq,
    IThunkOptions<string>
>('articlesPage/fetchArticlesList', async ({ page }, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = getArticlesPageLimit(getState())

    try {
        const response = await extra.api.get<IArticle[]>(`/articles`, {
            params: {
                _limit: limit,
                _page: page,
                _expand: 'user'
            }
        });

        return response.data;
    } catch (error) {
        return rejectWithValue('ERROR fetchArticlesList');
    }
});