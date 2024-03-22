import { type FC, lazy } from 'react';
import { type ILoginFormProps } from './LoginForm';

export const LoginFormLazy: FC<ILoginFormProps> = lazy(async () => await import('./LoginForm'));
