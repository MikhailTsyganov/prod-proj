import { articleDetailsReducer } from './articleDetailsSlice'
import { type IArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { EArticleType, type IArticle } from '../types/article';

describe('articleDetailsSlice', () => {
  const data: DeepPartial<IArticle> = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [EArticleType.IT],
    blocks: []
  }

  test('test service pending', () => {
    const state: DeepPartial<IArticleDetailsSchema> = {};
    expect(articleDetailsReducer(
      state as IArticleDetailsSchema,
      fetchArticleById.pending
    )).toEqual({
      isLoading: true,
      error: undefined
    })
  })
  test('test service fulfilled', () => {
    const state: DeepPartial<IArticleDetailsSchema> = {};
    expect(articleDetailsReducer(
      state as IArticleDetailsSchema,
      fetchArticleById.fulfilled(data as IArticle, '', '')
    )).toEqual({
      isLoading: false,
      data,
      error: undefined
    })
  })
})
