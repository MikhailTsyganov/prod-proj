import { type IStateSchema } from 'app/providers/store';
import { EArticleType, type IArticle } from '../types/article';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('articleDetails.tests', () => {
  const data: DeepPartial<IArticle> =
  {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [EArticleType.IT],
    blocks: []
  }

  test('should return data', () => {
    const state: DeepPartial<IStateSchema> = { articleDetails: { data } };
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(data)
  });

  test('data should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(undefined)
  })
  test('should return isLoading', () => {
    const state: DeepPartial<IStateSchema> = { articleDetails: { isLoading: false } };
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toBe(false)
  });

  test('isLoading should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(undefined)
  })
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = { articleDetails: { error: 'error' } };
    expect(getArticleDetailsError(state as IStateSchema)).toBe('error')
  });

  test('error should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsError(state as IStateSchema)).toEqual(undefined)
  })
})
