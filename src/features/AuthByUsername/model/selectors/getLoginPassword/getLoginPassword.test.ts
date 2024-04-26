import { type IStateSchema } from '@/app/providers/store';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<IStateSchema> = { loginForm: { password: '123' } };
    expect(getLoginPassword(state as IStateSchema)).toBe('123')
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginPassword(state as IStateSchema)).toEqual('')
  })
})
