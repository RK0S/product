import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';
import { profileReducer } from '../../../../features/editProfileCard/model/slice/profileSlice';
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addNewCommentReducer } from 'features/addNewComment/model/slices/addNewCommentSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addNewCommentReducer,
    articleDetailsComments: articleDetailsCommentsReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
);