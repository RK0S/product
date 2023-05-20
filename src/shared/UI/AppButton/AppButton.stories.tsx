import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButton, ThemeButton } from './AppButton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/AppButton',
    component: AppButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = args => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINED
};

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    theme: ThemeButton.FILLED
};

export const White = Template.bind({});
White.args = {
    children: 'Text',
    theme: ThemeButton.WHITE
};
White.decorators= [ThemeDecorator(Theme.DARK)];