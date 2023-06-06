import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from 'shared/assets/storybook/avatar.jpg';

export default {
    title: 'features/editProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = () => <EditableProfileCard  />;

export const Readonly = Template.bind({});
Readonly.args = {};
Readonly.decorators = [StoreDecorator({
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

export const ReadonlyDark = Template.bind({});
ReadonlyDark.args = {};
ReadonlyDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
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

export const Edit = Template.bind({});
Edit.args = {};
Edit.decorators = [StoreDecorator({
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
        }
    }
})];

export const WithValidateError = Template.bind({});
WithValidateError.args = {};
WithValidateError.decorators = [StoreDecorator({
    profile: {
        form: {
            avatar: AvatarImg,
            age: 191,
            city: 'MoscowMoscowMoscowMoscowMoscowMoscowMoscow',
            country: 'Armenia',
            currency: 'USD',
            name: 'Kid',
            surname: 'VS cat',
            username: '<3 cat  '
        },
        validateErrors: ['INCORRECT_AGE', 'INCORRECT_USERNAME', 'INCORRECT_NAME_CITY']
    }
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    profile: {
        error: 'error'
    }
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    profile: {
        isLoading: true
    }
})];