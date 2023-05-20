import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


export default {
    title: 'features/switchTheme',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher/>;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(Theme.DARK)];