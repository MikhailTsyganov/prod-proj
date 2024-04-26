import { type PayloadAction, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { type IArticleDetailsRecommendationsSchema } from '../types/recommendationsSchema';
import { type IArticle } from '@/entities/Article';
import { type IStateSchema } from '@/app/providers/store';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const ArticleDetailsRecomendationsAdapter = createEntityAdapter({
  selectId: (article: IArticle) => article.id
})

const initialState: IArticleDetailsRecommendationsSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined
};

const AricleDetailsRecommendationsSlice = createSlice({
  name: 'ArticleDetailsRecommendations',
  initialState: ArticleDetailsRecomendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>(initialState),
  reducers: {
    // setData(state, { payload }: PayloadAction<any>) {
    //
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleRecommendations.fulfilled,
        (state, action) => {
          state.isLoading = false;
          ArticleDetailsRecomendationsAdapter.setAll(state, action.payload)
        }
      )
      .addCase(fetchArticleRecommendations.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
  }
});

export const getArticleDetailsRecommendations = ArticleDetailsRecomendationsAdapter.getSelectors<IStateSchema>((state) => state.articleDetailsPage?.recommendations || ArticleDetailsRecomendationsAdapter.getInitialState())

export const { actions: ArticleDetailsRecommendationsActions, reducer: ArticleDetailsRecommendationsReducer } = AricleDetailsRecommendationsSlice;
