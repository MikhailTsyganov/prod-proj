import { profileActions, profileReducer } from './profileSlice'
import { type IProfileSchema } from '../types/profile';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpeg'
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice', () => {
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

  test('test set readonly', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false };
    expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true })
  })
  test('test cancel edit', () => {
    const state: DeepPartial<IProfileSchema> = { data };
    expect(profileReducer(state as IProfileSchema, profileActions.cancelEfit())).toEqual({
      readonly: true,
      currentDataForm: data,
      validateErrors: undefined,
      data
    })
  })
  test('test update data', () => {
    const state: DeepPartial<IProfileSchema> = {};
    expect(profileReducer(
      state as IProfileSchema,
      profileActions.updateData({ lastname: 'abc' })
    )).toEqual({ currentDataForm: { lastname: 'abc' } })
  })
  test('test service pending', () => {
    const state: DeepPartial<IProfileSchema> = {};
    expect(profileReducer(
      state as IProfileSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateErrors: undefined
    })
  })
  test('test service fulfilled', () => {
    const state: DeepPartial<IProfileSchema> = {};
    expect(profileReducer(
      state as IProfileSchema,
      updateProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      data,
      currentDataForm: data,
      readonly: true
    })
  })
})
