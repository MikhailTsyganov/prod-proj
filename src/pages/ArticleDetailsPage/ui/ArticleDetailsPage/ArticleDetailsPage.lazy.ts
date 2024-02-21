import { lazy } from 'react';

export const ArticleDetailsPageLazy = lazy(
  async () =>
    await new Promise((resolve) =>
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./ArticleDetailsPage'));
      }, 1500)
    )
);
