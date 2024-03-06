import { createSelector } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/store';

export const getScroll = (state: IStateSchema) => state.scroll
export const getScrollByPath = createSelector(
    [
        getScroll,
        (state: IStateSchema, path: string) => path
    ],
    (scroll, path) => scroll[path] || 0

)