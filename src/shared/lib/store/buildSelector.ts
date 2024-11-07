import { IStateSchema } from '@/app/providers/store';
import { useSelector } from 'react-redux';

type TSelectorProps<T> = (state: IStateSchema) => T;
type TResult<T> = [() => T, TSelectorProps<T>];

export function buildSelector<T>(selector: TSelectorProps<T>): TResult<T> {
  const useSelectorHook = () => {
    return useSelector(selector);
  };

  return [useSelectorHook, selector];
}
