import { type ICounterSchema } from 'entities/Counter';
import { type IUserSchema } from 'entities/User';

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema
}
