import { PayloadAction } from '@reduxjs/toolkit';
import { type ICounterSchema } from '../types/counterSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState: ICounterSchema = { value: 0 };

const counterSlice = buildSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    addAny(state, { payload }: PayloadAction<number>) {
      state.value += payload;
    },
  },
});

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice;
