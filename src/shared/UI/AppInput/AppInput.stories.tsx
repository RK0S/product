import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppInput } from './AppInput';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/AppInput',
    component: AppInput,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AppInput>;

const Template: ComponentStory<typeof AppInput> = args => <AppInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Text'
};

export const WithValue = Template.bind({});
WithValue.args = {
    value: 'Text'
};

export const WithValueOnFocus = Template.bind({});
WithValueOnFocus.args = {
    value: 'Text',
    autofocus: true
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Text'
};
Dark.decorators= [ThemeDecorator(Theme.DARK)];

export const DarkWithValue = Template.bind({});
DarkWithValue.args = {
    value: 'Text'
};
DarkWithValue.decorators= [ThemeDecorator(Theme.DARK)];

export const DarkWithValueOnFocus = Template.bind({});
DarkWithValueOnFocus.args = {
    value: 'Text',
    autofocus: true,
    loki: { skip: true },
};
DarkWithValueOnFocus.decorators= [ThemeDecorator(Theme.DARK)];