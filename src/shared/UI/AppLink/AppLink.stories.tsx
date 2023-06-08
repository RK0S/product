import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Link'
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Link'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Swamp = Template.bind({});
Swamp.args = {
    children: 'Link'
};
Swamp.decorators = [ThemeDecorator(Theme.SWAMP)];