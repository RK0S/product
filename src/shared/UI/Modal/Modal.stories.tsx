import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const Light = Template.bind({});
Light.args = {
    children: 'ghghgh',
    isOpened: true
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'ghghgh',
    isOpened: true,
    className: Theme.DARK
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];