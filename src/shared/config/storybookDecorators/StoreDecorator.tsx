import { type StoryFn } from '@storybook/react';
import { type IStateSchema, StoreProvider } from '@/app/providers/store';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { profileReducer } from '@/widgets/Profile/testing';
import { addNewCommentReducer } from '@/features/AddNewComment/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { type TReducerList } from '@/shared/lib/hooks/reducerManager/useAsyncReducer';

const defaultAsyncReducers: TReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addNewComment: addNewCommentReducer,
};

export const StoreDecorator =
  (state: DeepPartial<IStateSchema>, asyncReducers?: TReducerList) =>
  (Story: StoryFn) => {
    return (
      <StoreProvider
        initialState={state as IStateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };
