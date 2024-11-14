import { IStateSchema } from '@/app/providers/store';
import { useSelector } from 'react-redux';

type TSelectorProps<T, Args extends any[]> = (
  state: IStateSchema,
  ...args: Args
) => T;
type THook<T, Args extends any[]> = (...args: Args) => T;
type TResult<T, Args extends any[]> = [THook<T, Args>, TSelectorProps<T, Args>];

export function buildSelector<T, Args extends any[]>(
  selector: TSelectorProps<T, Args>,
): TResult<T, Args> {
  const useSelectorHook: THook<T, Args> = (...args: Args) => {
    return useSelector((state: IStateSchema) => selector(state, ...args));
  };

  return [useSelectorHook, selector];
}
