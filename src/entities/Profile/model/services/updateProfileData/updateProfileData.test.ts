import { updateProfileData } from './updateProfileData';
// import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpeg'
import { EValidateProfileError } from '../../types/profile';
import { IStateSchema } from 'app/providers/store';

describe('updateProfileData', () => {
  const data = {
    firstname: 'Mike',
    lastname: 'Tsyganov',
    age: 26,
    currency: ECurrency.USD,
    country: ECountry.Belarus,
    city: 'Tbilisi',
    username: 'FFir3',
    avatar
  };

  test('success response', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { currentDataForm: data }
    });

    thunk.api.put.mockReturnValue(Promise.resolve({
      data
    }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  })

  test('error response', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { currentDataForm: data }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([EValidateProfileError.SERVER_ERROR]);
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { currentDataForm: { ...data, firstname: '' } }
    });
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([EValidateProfileError.INCORRECT_USER_DATA]);
  })
})
