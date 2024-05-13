import { type IStateSchema } from '@/app/providers/store';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { type EValidateProfileError } from '@/entities/Profile';

describe('EValidateProfileError', () => {
  const validateErrors = ['INCORRECT_USER_DATA', 'INCORRECT_AGE', 'INCORRECT_COUNTRY'] as EValidateProfileError[]

  test('should return validateErrors', () => {
    const state: DeepPartial<IStateSchema> = { profile: { validateErrors } };
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(validateErrors)
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(undefined)
  })
})
