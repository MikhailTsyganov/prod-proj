import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EArticlesSortField, type IArticlesSortSchema } from '../types/ArticlesSortSchema';
import { EArticleView } from '@/entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { type TOrder } from '@/shared/types';
import { EArticleType } from '@/entities/Article/model/types/article';

const initialState: IArticlesSortSchema = {
  order: 'asc',
  search: '',
  view: EArticleView.TILE,
  sort: EArticlesSortField.CREATED_AT,
  tab: EArticleType.ALL,

  _inited: false
};

const articlesSortSlice = createSlice({
  name: 'articlesSort',
  initialState,
  reducers: {
    setView(state, { payload }: PayloadAction<EArticleView>) {
      state.view = payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, payload)
    },
    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload
    },
    setOrder(state, { payload }: PayloadAction<TOrder>) {
      state.order = payload
    },
    setSort(state, { payload }: PayloadAction<EArticlesSortField>) {
      state.sort = payload
    },
    setTab(state, { payload }: PayloadAction<EArticleType>) {
      state.tab = payload
    },
    initState(state) {
      state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as EArticleView
      state._inited = true
    }
  },
  extraReducers(builder) {
    // builder
    //     .addCase(ASYNC_THUNK_NAME.pending, (state) => {
    //         state.error = undefined;
    //         state.isLoading = true;
    //     })
    //     .addCase(
    //         ASYNC_THUNK_NAME.fulfilled,
    //         (state, action: PayloadAction<any>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //             state.currentDataForm = action.payload;
    //         }
    //     )
    //     .addCase(ASYNC_THUNK_NAME.rejected, (state, { payload }) => {
    //         state.isLoading = false;
    //         state.error = payload;
    //     })
  }
});

export const { actions: articlesSortActions, reducer: articlesSortReducer } = articlesSortSlice;
