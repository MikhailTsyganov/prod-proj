import { type IStateSchema } from 'app/providers/store';
import { getProfileData } from './getProfileData';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpeg'

describe('getProfileData', () => {
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

  test('should return data', () => {
    const state: DeepPartial<IStateSchema> = { profile: { data } };
    expect(getProfileData(state as IStateSchema)).toEqual(data)
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileData(state as IStateSchema)).toEqual(undefined)
  })
})
