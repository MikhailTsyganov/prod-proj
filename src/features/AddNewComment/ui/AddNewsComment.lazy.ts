import { lazy } from 'react';

export const AddNewCommentLazy = lazy(
  async () => await import('./AddNewComment'),
);
