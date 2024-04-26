import { type IStateSchema } from '@/app/providers/store';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('', () => {
    const state: DeepPartial<IStateSchema> = { counter: { value: 10 } };
    expect(getCounterValue(state as IStateSchema)).toEqual(10)
  })
})
