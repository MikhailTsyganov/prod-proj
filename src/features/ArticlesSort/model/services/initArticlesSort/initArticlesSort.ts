import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { articlesSortActions } from '../../slices/articlesSortSlice';
import { TOrder } from 'shared/types';
import { EArticlesSortField } from 'features/ArticlesSort/model/types/ArticlesSortSchema';
import { getArticlesSortIsInited } from '../../selectors/articlesSort';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { type EArticleType } from 'entities/Article/model/types/article';

export const initArticlesSort = createAsyncThunk<
    void,
    URLSearchParams,
    IThunkOptions<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const isInited = getArticlesSortIsInited(getState())

    if (!isInited) {
        searchParams.forEach((value, key) => {
            switch (key) {
                case 'order':
                    dispatch(articlesSortActions.setOrder(value as TOrder))
                    break;
                case 'sort':
                    dispatch(articlesSortActions.setSort(value as EArticlesSortField))
                    break;
                case 'search':
                    dispatch(articlesSortActions.setSearch(value))
                    break;
                case 'type':
                    dispatch(articlesSortActions.setTab(value as EArticleType))
                    break;
            }

        });

        dispatch(articlesSortActions.initState())
        // dispatch(fetchArticlesList({ replace: true }))
    }
});