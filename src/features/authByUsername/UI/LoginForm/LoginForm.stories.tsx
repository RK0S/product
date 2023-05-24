import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'features/authByUserName',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm/>;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {
    loki: { skip: true },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];