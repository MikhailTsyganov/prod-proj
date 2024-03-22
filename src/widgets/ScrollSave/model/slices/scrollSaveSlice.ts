import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type IScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: IScrollSaveSchema = {};

const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScroll(state, { payload }: PayloadAction<{ path: string, scrollPos: number }>) {
      state[payload.path] = payload.scrollPos
    }
  }
});

export const { actions: scrollSaveActions, reducer: scrollSaveReducer } = scrollSaveSlice;
