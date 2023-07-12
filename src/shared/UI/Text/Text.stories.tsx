import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Both = Template.bind({});
Both.args = {
    title: 'Title',
    text: 'Text'
};

export const Large = Template.bind({});
Large.args = {
    title: 'Title',
    text: 'Text',
    size: 'large'
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: 'error'
};

export const Left = Template.bind({});
Left.args = {
    title: 'Title',
    text: 'Text',
    textAlign: 'left'
};

export const Right = Template.bind({});
Right.args = {
    title: 'Title',
    text: 'Text',
    textAlign: 'right'
};

export const Center = Template.bind({});
Center.args = {
    title: 'Title',
    text: 'Text',
    textAlign: 'center'
};

export const DarkError = Template.bind({});
DarkError.args = {
    title: 'Title',
    text: 'Text',
    theme: 'error'
};
DarkError.decorators= [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text'
};

export const DarkBoth = Template.bind({});
DarkBoth.args = {
    title: 'Title',
    text: 'Text'
};
DarkBoth.decorators= [ThemeDecorator(Theme.DARK)];

export const DarkOnlyTitle = Template.bind({});
DarkOnlyTitle.args = {
    title: 'Title',
};
DarkOnlyTitle.decorators= [ThemeDecorator(Theme.DARK)];

export const DarkOnlyText = Template.bind({});
DarkOnlyText.args = {
    text: 'Text'
};
DarkOnlyText.decorators= [ThemeDecorator(Theme.DARK)];

export const SwampBoth = Template.bind({});
SwampBoth.args = {
    title: 'Title',
    text: 'Text'
};
SwampBoth.decorators= [ThemeDecorator(Theme.SWAMP)];