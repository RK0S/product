import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from '../../assets/storybook/avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Comment = Template.bind({});
Comment.args = {
    src: AvatarImg,
    variant: 'comment'
};

export const Profile = Template.bind({});
Profile.args = {
    src: AvatarImg,
    variant: 'profile'
};

export const Corner = Template.bind({});
Corner.args = {
    src: AvatarImg,
    variant: 'corner'
};