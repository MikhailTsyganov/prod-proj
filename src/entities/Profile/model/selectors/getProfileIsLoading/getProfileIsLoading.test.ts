import { type IStateSchema } from 'app/providers/store';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should return loading', () => {
    const state: DeepPartial<IStateSchema> = { profile: { isLoading: true } };
    expect(getProfileIsLoading(state as IStateSchema)).toBe(true)
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined)
  })
})
