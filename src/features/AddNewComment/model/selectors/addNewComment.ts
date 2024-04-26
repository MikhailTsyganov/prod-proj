import { type IStateSchema } from '@/app/providers/store';

export const getAddNewCommentText = (state: IStateSchema) => state.addNewComment?.text
export const getAddNewCommentError = (state: IStateSchema) => state.addNewComment?.error
