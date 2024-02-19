import { type IStateSchema } from 'app/providers/store';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should return readonly', () => {
    const state: DeepPartial<IStateSchema> = { profile: { readonly: true } };
    expect(getProfileReadonly(state as IStateSchema)).toBe(true)
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileReadonly(state as IStateSchema)).toEqual(undefined)
  })
})
