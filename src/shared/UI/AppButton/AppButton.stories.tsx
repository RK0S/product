import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButton, ThemeButton } from './AppButton';

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
