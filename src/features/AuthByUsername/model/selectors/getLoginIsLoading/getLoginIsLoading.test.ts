import { type IStateSchema } from '@/app/providers/store';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<IStateSchema> = { loginForm: { isLoading: true } };
    expect(getLoginIsLoading(state as IStateSchema)).toBe(true)
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginIsLoading(state as IStateSchema)).toBe(false)
  })
})
