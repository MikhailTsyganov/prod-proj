import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername', () => {
  test('success login', async () => {
    const responseValue = { username: 'adm123', id: '123' }

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({
      data: responseValue
    }))

    const result = await thunk.callThunk({ username: 'adm', password: '123' })

    console.log('result', result);

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(responseValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(responseValue);
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: 'adm', password: '123' })
    console.log('result', result);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('ERROR loginByUsername');
  })
  //   test('success login', async () => {
  //   const responseValue = { username: 'adm123', id: '123'}

  //   mockedAxios.post.mockReturnValue(Promise.resolve({
  //     data: responseValue
  //   }))

  //   const action = loginByUsername({username: 'adm', password: '123'});
  //   const result = await action(dispatch, getState, undefined);
  //   console.log('result', result);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(responseValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(responseValue);
  //  })

  //   test('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))

  //   const action = loginByUsername({username: 'adm', password: '123'});
  //   const result = await action(dispatch, getState, undefined);
  //   console.log('result', result);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('ERROR loginByUsername');
  //  })
})
