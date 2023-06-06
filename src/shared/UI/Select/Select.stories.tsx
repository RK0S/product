import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
    label: 'Укажите значение',
    options: [
        {value: '123', content: '123'},
        {value: '1234', content: '1234'},
    ]
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Укажите значение',
    options: [
        {value: '123', content: '123'},
        {value: '1234', content: '1234'},
    ]
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
