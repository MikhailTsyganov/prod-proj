import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export const getCanEdit = createSelector(
  [getUserAuthData, getArticleDetailsData],
  (userData, article) => {
    if (!userData || !article) {
      return false;
    }

    return article.user.id === userData.id;
  },
);
