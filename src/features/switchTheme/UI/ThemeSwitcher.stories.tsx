import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';


export default {
    title: 'features/switchTheme',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher/>;

export const Light = Template.bind({});
Light.args = {};
