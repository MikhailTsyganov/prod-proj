import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.jpeg';
import { EValidateProfileError } from '@/entities/Profile';

describe('updateProfileData', () => {
  const data = {
    id: '1',
    firstname: 'Mike',
    lastname: 'Tsyganov',
    age: 26,
    currency: ECurrency.USD,
    country: ECountry.Belarus,
    city: 'Tbilisi',
    username: 'FFir3',
    avatar,
  };

  test('success response', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { currentDataForm: data },
    });

    thunk.api.put.mockReturnValue(
      Promise.resolve({
        data,
      }),
    );

    const result = await thunk.callThunk('1');

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error response', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { currentDataForm: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([EValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { currentDataForm: { ...data, firstname: '' } },
    });
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([EValidateProfileError.INCORRECT_USER_DATA]);
  });
});
