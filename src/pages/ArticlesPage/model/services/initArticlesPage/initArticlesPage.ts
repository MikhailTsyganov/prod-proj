import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { getArticlesPageInited } from '../../selectors/articlesPage';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    IThunkOptions<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const isInited = getArticlesPageInited(getState())

    if (!isInited) {
        searchParams.forEach((value, key) => {


            switch (key) {
                case 'page':
                    dispatch(articlePageActions.setPage(Number(value)))
                    break;
            }

        });

        dispatch(articlePageActions.initState())
        dispatch(fetchArticlesList({}))
    }

});