import { type PayloadAction, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { IArticlePageSchema } from '../types/articlePageSchema';
import { EArticleView, IArticle } from 'entities/Article';
import { IStateSchema } from 'app/providers/store';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const articlePageAdapter = createEntityAdapter({
    selectId: (article: IArticle) => article.id,
})

const initialState: IArticlePageSchema = articlePageAdapter.getInitialState<IArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    hasMore: true,
    page: 1,
    limit: 9,

    _inited: false
})

const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState,
    reducers: {
        setPage(state, { payload }: PayloadAction<number>) {
            state.page = payload
        },
        initState(state) {
            state.limit = 9
            state._inited = true
        }
    }
    ,
    extraReducers(builder) {
        builder
            .addCase(
                fetchArticlesList.pending,
                (state, { meta }) => {
                    if (meta.arg.replace) {
                        articlePageAdapter.removeAll(state)
                    }

                    state.isLoading = true;
                    state.error = undefined;
                }
            )
            .addCase(
                fetchArticlesList.fulfilled,
                (state, { payload, meta }) => {
                    if (meta.arg.replace) {
                        articlePageAdapter.setAll(state, payload)
                    } else {
                        articlePageAdapter.setMany(state, payload)
                    }
                    state.isLoading = false;
                    state.hasMore = payload.length >= state.limit
                }
            )
            .addCase(
                fetchArticlesList.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            )
    }
});

export const getArticles = articlePageAdapter.getSelectors<IStateSchema>((state) => state.articlesPage || articlePageAdapter.getInitialState())


export const { actions: articlePageActions, reducer: articlePageReducer } = articlePageSlice;
