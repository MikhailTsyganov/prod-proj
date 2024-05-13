import { type IStateSchema } from '@/app/providers/store';
import { getProfileCurrentDataForm } from './getProfileCurrentDataForm';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.jpeg'

describe('getProfileCurrentDataForm', () => {
  const currentData = {
    firstname: 'Mike',
    lastname: 'Tsyganov',
    age: 26,
    currency: ECurrency.USD,
    country: ECountry.Belarus,
    city: 'Tbilisi',
    username: 'FFir3',
    avatar

  };

  test('should return currentDataForm', () => {
    const state: DeepPartial<IStateSchema> = { profile: { currentDataForm: currentData } };
    expect(getProfileCurrentDataForm(state as IStateSchema)).toEqual(currentData)
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileCurrentDataForm(state as IStateSchema)).toEqual(undefined)
  })
})
