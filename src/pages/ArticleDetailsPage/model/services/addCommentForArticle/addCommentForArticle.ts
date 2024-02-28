import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkOptions } from 'app/providers/store';
import { getUserAuthData } from 'entities/User';
import { IComment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';


export const addCommentForArticle = createAsyncThunk<
    IComment,
    string,
    IThunkOptions<string>
>('articleDetailsPage/addCommentForArticle', async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    const userId = getUserAuthData(getState())?.id
    const articleId = getArticleDetailsData(getState())?.id

    if (!text || !userId || !articleId) {
        return rejectWithValue('no data')
    }

    try {
        const response = await extra.api.post<IComment>(`/comments`, {
            text,
            userId,
            articleId
        });

        if (!response.data) {
            throw new Error()
        }

        dispatch(fetchCommentsByArticleId(articleId))

        return response.data;
    } catch (error) {
        return rejectWithValue('ERROR sendComment');
    }
});
