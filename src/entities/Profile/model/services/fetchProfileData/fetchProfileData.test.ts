import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpeg'

describe('fetchProfileData', () => {
  test('success response', async () => {
    const responseValue = {
      firstname: 'Mike',
      lastname: 'Tsyganov',
      age: 26,
      currency: ECurrency.USD,
      country: ECountry.Belarus,
      city: 'Tbilisi',
      username: 'FFir3',
      avatar

    };

    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({
      data: responseValue
    }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(responseValue);
  })

  test('error response', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('ERROR fetchProfileData');
  })
})
