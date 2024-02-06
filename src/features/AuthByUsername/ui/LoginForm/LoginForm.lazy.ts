import { type FC, lazy } from 'react';
import { type ILoginFormProps } from './LoginForm';

export const LoginFormLazy: FC<ILoginFormProps> = lazy(
  async () =>
    await new Promise((resolve) =>
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./LoginForm'));
      }, 1500)
    )
);
