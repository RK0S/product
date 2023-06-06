import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from 'shared/assets/storybook/avatar.jpg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage/>;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            avatar: AvatarImg,
            age: 19,
            city: 'Moscow',
            country: 'Armenia',
            currency: 'USD',
            name: 'Kid',
            surname: 'VS cat',
            username: '<3 cat'
        },
        readonly: true
    }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            avatar: AvatarImg,
            age: 19,
            city: 'Moscow',
            country: 'Armenia',
            currency: 'USD',
            name: 'Kid',
            surname: 'VS cat',
            username: '<3 cat'
        },
        readonly: true
    }
})];
