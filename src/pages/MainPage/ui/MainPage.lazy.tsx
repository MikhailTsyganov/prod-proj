import { lazy } from 'react';

export const MainPageLazy = lazy(
  async () =>
    await new Promise((resolve) =>
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./MainPage'));
      }, 1500)
    )
);
