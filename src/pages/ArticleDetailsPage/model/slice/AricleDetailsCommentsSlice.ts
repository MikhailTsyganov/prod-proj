import {
    EntityState,
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/store'
import { IComment } from 'entities/Comment'
import { ICommentsSchema } from '../types/commentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'


const ArticleDetailsCommentsAdapter = createEntityAdapter({
    selectId: (comment: IComment) => comment.id,
})

const ArticleDetailsCommentsSlice = createSlice({
    name: 'ArticleDetailsComments',
    initialState: ArticleDetailsCommentsAdapter.getInitialState<ICommentsSchema>({
        isLoading: undefined,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(
                fetchCommentsByArticleId.pending,
                (state) => {
                    state.isLoading = true;
                    state.error = undefined;
                }
            )
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<IComment[]>) => {
                    state.isLoading = false;
                    ArticleDetailsCommentsAdapter.setAll(state, action.payload)
                }
            )
            .addCase(
                fetchCommentsByArticleId.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            )
    }
})

export const getArticleDetailsComment = ArticleDetailsCommentsAdapter.getSelectors<IStateSchema>((state) => state.articleDetailsComments || ArticleDetailsCommentsAdapter.getInitialState())

export const { actions: ArticleDetailsCommentsActions, reducer: ArticleDetailsCommentsReducer } = ArticleDetailsCommentsSlice