import { initArticlesPage } from './initArticlesPage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchArticlesNextPage', () => {
    test('success response', async () => {

        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false
            }
        });

        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(4)
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 })
        expect(result.meta.requestStatus).toBe('fulfilled');
    })

    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true
            }
        });

        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled');
    })

})
