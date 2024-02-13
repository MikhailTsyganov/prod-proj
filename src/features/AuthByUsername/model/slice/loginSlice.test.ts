import { loginActions, loginReducer } from './loginSlice'
import { type ILoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<ILoginSchema> = { username: '' };
    expect(loginReducer(state as ILoginSchema, loginActions.setUsername('123'))).toEqual({ username: '123' })
  })
  test('test set password', () => {
    const state: DeepPartial<ILoginSchema> = { password: '' };
    expect(loginReducer(state as ILoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' })
  })
})
