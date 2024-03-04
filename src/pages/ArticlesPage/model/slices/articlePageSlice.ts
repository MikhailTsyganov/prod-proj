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
    view: localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as EArticleView || EArticleView.TILE
})

const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState,
    reducers: {
        setView(state, { payload }: PayloadAction<EArticleView>) {
            state.view = payload
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(
                fetchArticlesList.pending,
                (state) => {
                    state.isLoading = true;
                    state.error = undefined;
                }
            )
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action: PayloadAction<IArticle[]>) => {
                    articlePageAdapter.setAll(state, action.payload)
                    state.isLoading = false;
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
