import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { IArticle } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    void,
    IThunkOptions<string>
>('articlesPage/fetchArticlesList', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<IArticle[]>(`/articles?_expand=user`);

        return response.data;
    } catch (error) {
        return rejectWithValue('ERROR fetchArticlesList');
    }
});