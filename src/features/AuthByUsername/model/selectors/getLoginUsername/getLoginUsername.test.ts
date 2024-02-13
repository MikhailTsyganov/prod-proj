import { type IStateSchema } from 'app/providers/store';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<IStateSchema> = { loginForm: { username: 'admin' } };
    expect(getLoginUsername(state as IStateSchema)).toBe('admin')
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginUsername(state as IStateSchema)).toEqual('')
  })
})
