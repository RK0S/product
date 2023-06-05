import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarImg from 'shared/assets/storybook/avatar.jpg';
 
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args}/>;

export const Light = Template.bind({});
Light.args = {
    data: {
        avatar: AvatarImg
    }
};


export const Dark = Template.bind({});
Dark.args = {
    data: {
        avatar: AvatarImg
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];