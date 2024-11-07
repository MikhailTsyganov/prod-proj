import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import { EArticleType, type IArticle } from '../../types/article';

describe('fetchArticleById', () => {
  test('success response', async () => {
    const data: DeepPartial<IArticle> = {
      id: '1',
      title: 'Javascript news',
      subtitle: 'Что нового в JS за 2022 год?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      views: 1022,
      createdAt: '26.02.2022',
      type: [EArticleType.IT],
      blocks: [],
    };

    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data,
      }),
    );

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error response', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('ERROR fetchArticleById');
  });
});
