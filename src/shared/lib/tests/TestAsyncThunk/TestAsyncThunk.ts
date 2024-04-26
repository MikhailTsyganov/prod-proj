import { type AsyncThunk } from '@reduxjs/toolkit';
import { type IStateSchema } from '@/app/providers/store';
import axios, { type AxiosStatic } from 'axios';

type TActionCreator<Return, Arg, RejectedValue> = AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => IStateSchema;
  actionCreator: TActionCreator<Return, Arg, RejectedValue>;
  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: TActionCreator<Return, Arg, RejectedValue>,
    state?: DeepPartial<IStateSchema>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as IStateSchema);
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

    return result;
  }
}
