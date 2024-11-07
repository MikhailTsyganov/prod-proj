import { counterActions, counterReducer } from './counterSlice';
import { type ICounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  test('increment', () => {
    const state: DeepPartial<ICounterSchema> = { value: 10 };
    expect(
      counterReducer(state as ICounterSchema, counterActions.increment()),
    ).toEqual({ value: 11 });
  });

  test('decrement', () => {
    const state: DeepPartial<ICounterSchema> = { value: 10 };
    expect(
      counterReducer(state as ICounterSchema, counterActions.decrement()),
    ).toEqual({ value: 9 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({
      value: -1,
    });
  });
});
