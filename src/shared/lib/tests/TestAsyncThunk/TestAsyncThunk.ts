import { type AsyncThunk } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/store';

type TActionCreator<Return, Arg, RejectedValue> = AsyncThunk<Return, Arg, { rejectValue: RejectedValue } >;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => IStateSchema;
  actionCreator: TActionCreator<Return, Arg, RejectedValue>;

  constructor(actionCreator: TActionCreator<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
