import { type Story } from '@storybook/react';
import { type IStateSchema, StoreProvider } from 'app/providers/store';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addNewCommentReducer } from 'features/AddNewComment/model/slices/addNewCommentSlice';
import { loginReducer } from 'features/AuthByUsername';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';
import { type TReducerList } from 'shared/hooks/reducerManager/useAsyncReducer';

const defaultAsyncReducers: TReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addNewComment: addNewCommentReducer
}

export const StoreDecorator = (state: DeepPartial<IStateSchema>, asyncReducers?: TReducerList) => (Story: Story) => {
  return (
    <StoreProvider initialState={state as IStateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider >
  )
}
