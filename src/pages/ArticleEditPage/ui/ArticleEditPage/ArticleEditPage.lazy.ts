import { lazy } from 'react';

export const ArticleEditPageLazy = lazy(
    async () =>
        await new Promise((resolve) =>
            setTimeout(() => {
                // @ts-expect-error
                resolve(import('./ArticleEditPage'));
            }, 1500)
        )
);
