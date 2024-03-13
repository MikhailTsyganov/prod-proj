import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { IArticle } from 'entities/Article';
import { getArticlesPageLimit, getArticlesPagePage } from '../../selectors/articlesPage';
import { getArticlesSortOrder, getArticlesSortSearch, getArticlesSortSort } from 'features/ArticlesSort';
import { addQueryParams } from 'shared/lib/helpers/addQueryParams/addQueryParams';
import { getArticlesSortTab } from 'features/ArticlesSort/model/selectors/articlesSort';
import { EArticleType } from 'entities/Article/model/types/article';

interface IfetchArticlesListReq {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    IfetchArticlesListReq,
    IThunkOptions<string>
>('articlesPage/fetchArticlesList', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = getArticlesPageLimit(getState())
    const page = getArticlesPagePage(getState())
    const search = getArticlesSortSearch(getState())
    const sort = getArticlesSortSort(getState())
    const order = getArticlesSortOrder(getState())
    const tab = getArticlesSortTab(getState())

    try {
        addQueryParams({
            page: String(page), sort, order, search, tab
        })
        const response = await extra.api.get<IArticle[]>(`/articles`, {
            params: {
                _limit: limit,
                _page: page,
                _expand: 'user',
                _sort: sort,
                _order: order,
                q: search,
                type: tab === EArticleType.ALL ? undefined : tab
            }
        });

        return response.data;
    } catch (error) {
        return rejectWithValue('ERROR fetchArticlesList');
    }
});