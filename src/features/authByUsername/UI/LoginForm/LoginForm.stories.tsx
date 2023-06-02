import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/authByUserName',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm onSuccess={() => null} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: {username: 'user', password: 'password'}
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: {username: 'user', password: 'password', error: 'ERROR'}
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: {isLoading: true}
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {username: 'user', password: 'password'}
})];

export const DarkWithError = Template.bind({});
DarkWithError.args = {};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {username: 'user', password: 'password', error: 'ERROR'}
})];

export const DarkLoading = Template.bind({});
DarkLoading.args = {};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {isLoading: true}
})];