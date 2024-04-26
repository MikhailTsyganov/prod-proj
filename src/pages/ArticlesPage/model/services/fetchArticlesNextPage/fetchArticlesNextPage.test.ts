import { fetchArticlesNextPage } from './fetchArticlesNextPage';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchArticlesNextPage', () => {
  test('success response', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        hasMore: true,
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        isLoading: false
      }
    });

    const result = await thunk.callThunk()

    // expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ })
    expect(result.meta.requestStatus).toBe('fulfilled');
  })

  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        hasMore: false,
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        isLoading: false
      }
    });

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled');
  })
  test('fetchArticlesList not called with loading', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        hasMore: true,
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        isLoading: true
      }
    });

    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled');
  })
})
